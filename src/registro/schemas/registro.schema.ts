import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'registro'})
export class Registro extends Document {

    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    codigo_abreviacion: string

    @Prop({required: true})
    codigo: string

    @Prop({required: true})
    periodo_id: number  //pk sql

    @Prop({required: true})
    nivel_id: number    //pk sql

    @Prop({required: true})
    espacio_academico_id: string

    @Prop({required: true})
    estado_registro_id: number  //pk sql

    @Prop({type: Object}) //Object
    estructura_nota

    @Prop({required: true})
    finalizado: boolean
    
    @Prop({required: true})
    modificacion_extemporanea: boolean

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
    
}

export const RegistroSchema = SchemaFactory.createForClass(Registro);