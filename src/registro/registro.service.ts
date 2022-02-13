import { Injectable } from '@nestjs/common';

import { Registro } from './schemas/registro.schema'
import { RegistroDto } from "./dto/registro.dto";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { FilterDto } from "../filters/dto/filter.dto";
import { FiltersService } from "../filters/filters.service";

@Injectable()
export class RegistroService {
    constructor(@InjectModel(Registro.name) private readonly registroModel: Model<Registro>){}

    async post(registroDto: RegistroDto): Promise<Registro>{
        try{
            const registro = new this.registroModel(registroDto);
            registro.fecha_creacion = new Date();
            registro.fecha_modificacion = new Date();
            return await registro.save();
        }
        catch(error){
            return null;
        }
        
    }

    async getAll(filterDto: FilterDto): Promise<Registro[]>{
        try{
            const filtersService = new FiltersService(filterDto);
            return await this.registroModel.find(filtersService.getQuery(), filtersService.getFields(), filtersService.getLimitAndOffset())
            .sort(filtersService.getSortBy()).exec();
        }
        catch(error){
            return null;
        }
    }

    async getById(id: string): Promise<Registro>{
        try{
            return await this.registroModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async put(id: string, registroDto: RegistroDto): Promise<Registro>{
        try{
            registroDto.fecha_modificacion = new Date();
            await this.registroModel.findByIdAndUpdate(id, registroDto, {new: true}).exec();
            return await this.registroModel.findById(id).exec();
        }
        catch(error){
            return null;
        };
    }

    async delete(id: string): Promise<any>{
        try{
            return await this.registroModel.findByIdAndRemove(id).exec();
        }
        catch(error){
            return null;
        };
    }
}
