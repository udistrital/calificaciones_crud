import { ApiProperty } from "@nestjs/swagger";

export class RegistroDto{

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;

    @ApiProperty()
    readonly codigo_abreviacion: string;

    @ApiProperty()
    readonly codigo: string;

    @ApiProperty()
    readonly periodo_id: number;    //pk sql

    @ApiProperty()
    readonly nivel_id: number;  //pk sql

    @ApiProperty()
    readonly espacio_academico_id: string;

    @ApiProperty()
    readonly estado_registro_id: number;    //pk sql

    @ApiProperty()
    readonly estructura_nota: Object; //Object

    @ApiProperty()
    activo: boolean;

    @ApiProperty()
    readonly fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}