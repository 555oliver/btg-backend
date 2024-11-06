import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateFondoDto } from './dto/create-fondo.dto';
import { UpdateFondoDto } from './dto/update-fondo.dto';
import { Model } from 'mongoose';
import { Fondo } from './entities/fondo.entity';

@Injectable()
export class FondosService {
  constructor(
    @InjectModel(Fondo.name)
    private readonly fondosModel: Model<Fondo>,
  ) {}

  async create(createFondoDto: CreateFondoDto) {
    createFondoDto.nombre_fondo =
      createFondoDto.nombre_fondo.toLocaleLowerCase();
    const fondos = await this.fondosModel.create(createFondoDto);
    return fondos;
  }

  findAll() {
    return this.fondosModel.find();
  }

  findOne(id: string) {
    return this.fondosModel.findById(id);
  }

}
