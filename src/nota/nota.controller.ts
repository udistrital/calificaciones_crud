import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put, Query, Res } from '@nestjs/common';
import { NotaDto } from "./dto/nota.dto";
import { NotaService } from "./nota.service";

import { FilterDto } from "../filters/dto/filter.dto";

@Controller('nota')
export class NotaController {
    constructor(private notaService: NotaService){}

    @Post()
    async post(@Res() res, @Body() notaDto: NotaDto){
        const nota = await this.notaService.post(notaDto);
        if(!nota){
            throw new HttpException({
                Success: false,
                Status: "400",
                Message: "Error service Post: The request contains an incorrect data type or an invalid parameter",
                Data: null
            }, HttpStatus.BAD_REQUEST)
        }
        res.status(HttpStatus.CREATED).json(
            {
                Success: true,
                Status: "201",
                Message: "Registration successful",
                Data: nota
            }
        );
    }

    @Get()
    async getAll(@Res() res, @Query() filterDto: FilterDto){
        const nota = await this.notaService.getAll(filterDto);
        if(!nota){
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
                Data: nota
            }
        );
    }

    @Get('/:id')
    async getById(@Res() res, @Param('id') id: string){
        const nota = await this.notaService.getById(id);
        if(!nota){
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
                Data: nota
            }
        );
    }

    @Put('/:id')
    async put(@Res() res, @Param('id') id: string, @Body() notaDto: NotaDto){
        const nota = await this.notaService.put(id, notaDto);
        if(!nota){
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
                Data: nota
            }
        );
    }

    @Delete('/:id')
    async delete(@Res() res, @Param('id') id: string){
        const nota = await this.notaService.delete(id);
        if(!nota){
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
