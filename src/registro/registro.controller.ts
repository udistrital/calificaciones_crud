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
                Data: registro,
                Message: "Registration Successfull",
                Status: "201",
                Success: true
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto){
        const registro = await this.registroService.getAll(filterDto);
        if(!registro){
            throw new HttpException({
                Success: false,
                Status: "404",
                Message: "Error service GetAll: The request contains an incorrect parameter or no record exist",
                Data: null
            }, HttpStatus.NOT_FOUND)
        }
        res.status(HttpStatus.OK).json(
            {
                Data: registro,
                Messagge: "Registration Sucessfull",
                Status: "201",
                Success: true
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
                Data: registro,
                Message: "Registration Successfull",
                Status: "201",
                Success: true
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
                Data: registro,
                Message: "Update Successfull",
                Status: "200",
                Success: true
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
                Data: {
                    _id: id
                },
                Message: "Registration Succesfull",
                Status: "201",
                Success: true
            }
        );
    }
}
