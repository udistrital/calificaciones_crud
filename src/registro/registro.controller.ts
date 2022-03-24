import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { RegistroDto } from "./dto/registro.dto";
import { RegistroService } from "./registro.service";

import { FilterDto } from "../filters/dto/filter.dto";

@Controller('registro')
export class RegistroController {
    constructor(private registroService: RegistroService){}

    @Post()
    async post(@Res() res, @Body() registroDto: RegistroDto){
        const registro = await this.registroService.post(registroDto);
        if(!registro){
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "201",
                Message: "Registration successful",
                Data: registro
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto){
        const registro = await this.registroService.getAll(filterDto);
        if(!registro || registro.length == 0){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: registro
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string){
        const registro = await this.registroService.getById(id);
        if(!registro){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetOne: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Request successful",
                Data: registro
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() registroDto: RegistroDto){
        const registro = await this.registroService.put(id, registroDto);
        if(!registro){
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Put: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        return res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Update successful",
                Data: registro
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string){
        const registro = await this.registroService.delete(id);
        if(!registro){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service Put: Request contains incorrect parameter",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        return res.status(HttpStatus.OK).json(
            {
                Success: true,
                Status: "200",
                Message: "Delete successful",
                Data: {
                    _id: id
                }
            }
        );
    }
}
