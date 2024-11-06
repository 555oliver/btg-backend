import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransacionesService } from './transaciones.service';
import { CreateTransacioneDto } from './dto/create-transacione.dto';
import { UpdateTransacioneDto } from './dto/update-transacione.dto';

@Controller('transaciones')
export class TransacionesController {
  constructor(private readonly transacionesService: TransacionesService) {}

  @Post()
  create(@Body() createTransacioneDto: CreateTransacioneDto) {
    return this.transacionesService.create(createTransacioneDto);
  }

  @Get()
  findAll() {
    return this.transacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transacionesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransacioneDto: UpdateTransacioneDto) {
    return this.transacionesService.update(id, updateTransacioneDto);
  }

}
