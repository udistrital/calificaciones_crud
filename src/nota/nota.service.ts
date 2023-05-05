import { Injectable } from '@nestjs/common';

import { Nota } from "./schemas/nota.schema";
import { NotaDto } from "./dto/nota.dto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";
import { Registro } from 'src/registro/schemas/registro.schema';

@Injectable()
export class NotaService {
    constructor(@InjectModel(Nota.name) private readonly notaModel: Model<Nota>,
    @InjectModel(Registro.name) private readonly registroModel: Model<Registro>){}

    async post(notaDto: NotaDto): Promise<Nota>{
        try{
            const nota = new this.notaModel(notaDto);
            await this.registroModel.findById(nota.registro_id);    //check if registro existe
            nota.fecha_creacion = new Date();
            nota.fecha_modificacion = new Date();
            return await nota.save();
        }
        catch(error){
            return null;
        }
    }
    
    async getAll(filterDto: FilterDto): Promise<Nota[]>{
        try{
            const filtersService = new FiltersService(filterDto);
            return await this.notaModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy()).exec();
        }
        catch(error){
            return null;
        }
        
    }

    async getById(id: string): Promise<Nota>{
        try{
            var nota = await this.notaModel.findById(id).exec();
            var registro = await this.registroModel.findById(nota.registro_id);    //check if registro existe
            nota.registro_id = registro;    // reemplaza registro_id por el registro
            return  nota;
        }
        catch(error){
            return null;
        };
    }

    async put(id: string, notaDto: NotaDto): Promise<Nota>{
        try{
            if(notaDto.registro_id != undefined){
                await this.registroModel.findById(notaDto.registro_id);    //check if registro existe
            }
            await this.notaModel.findById(id).then(nota => {    // asegurar inmutacion fecha_creacion
                notaDto.fecha_creacion = nota.fecha_creacion;
                notaDto.fecha_modificacion = new Date();
            })
            await this.notaModel.findByIdAndUpdate(id, notaDto, {new: true}).exec();
            return await this.notaModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async delete(id: string): Promise<any>{
        try{
            return await this.notaModel.findByIdAndRemove(id).exec();
        }
        catch(error){
            return null;
        };
    }

}
