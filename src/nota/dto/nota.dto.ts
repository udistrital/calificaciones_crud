import { ApiProperty } from "@nestjs/swagger";

export class NotaDto{

    @ApiProperty()
    readonly nombre: string;

    @ApiProperty()
    readonly descripcion: string;
    
    @ApiProperty()
    readonly estudiante_id: number; //pk sql
    
    @ApiProperty()
    readonly registro_id: string;
    
    @ApiProperty()
    readonly valor_nota: Object; //Object
    
    @ApiProperty()
    readonly nota_definitiva: number;
    
    @ApiProperty()
    readonly aprobado: boolean;
    
    @ApiProperty()
    readonly homologado: boolean;
    
    @ApiProperty()
    readonly fallas: number;
    
    @ApiProperty()
    readonly observacion_nota_id: number;   //pk sql
    
    @ApiProperty()
    activo: boolean;
    
    @ApiProperty()
    fecha_creacion: Date;

    @ApiProperty()
    fecha_modificacion: Date;

}