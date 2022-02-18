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
    periodo_id: string

    @Prop({required: true})
    nivel_id: string

    @Prop({required: true})
    espacio_academico_id: string

    @Prop({required: true})
    estado_registro_id: string

    @Prop({type: Object}) //Object
    estructura_nota

    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date
    
}

export const RegistroSchema = SchemaFactory.createForClass(Registro);