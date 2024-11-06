import {
  Controller,
  Get,
  Post,
  Body,
  Param,
} from '@nestjs/common';
import { FondosService } from './fondos.service';
import { CreateFondoDto } from './dto/create-fondo.dto';

@Controller('fondos')
export class FondosController {
  constructor(private readonly fondosService: FondosService) {}

  @Post()
  create(@Body() createFondoDto: CreateFondoDto) {
    return this.fondosService.create(createFondoDto);
  }

  @Get()
  findAll() {
    console.log("entro a donfos all");
    
    return this.fondosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fondosService.findOne(id);
  }

}
