import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({collection: 'nota'})
export class Nota extends Document {
    
    @Prop({required: true})
    nombre: string

    @Prop({required: true})
    descripcion: string

    @Prop({required: true})
    estudiante_id: number   //pk sql
    
    @Prop({required: true})
    registro_id: string
    
    @Prop({type: Object})   //Object
    valor_nota
    
    @Prop({required: true})
    nota_definitiva: number
    
    @Prop({required: true})
    aprobado: boolean
    
    @Prop({required: true})
    homologado: boolean

    @Prop({required: true})    
    fallas: number
    
    @Prop({required: true})
    observacion_nota_id: number //pk sql
    
    @Prop({required: true})
    activo: boolean

    @Prop({required: true})
    fecha_creacion: Date

    @Prop({required: true})
    fecha_modificacion: Date

}

export const NotaSchema = SchemaFactory.createForClass(Nota);