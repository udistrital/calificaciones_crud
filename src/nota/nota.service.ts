import { Injectable } from '@nestjs/common';

import { Nota } from "./schemas/nota.schema";
import { NotaDto } from "./dto/nota.dto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class NotaService {
    constructor(@InjectModel(Nota.name) private readonly notaModel: Model<Nota>){}

    async post(notaDto: NotaDto): Promise<Nota>{
        try{
            const nota = new this.notaModel(notaDto);
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
            return await this.notaModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async put(id: string, notaDto: NotaDto): Promise<Nota>{
        try{
            notaDto.fecha_modificacion = new Date();
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
