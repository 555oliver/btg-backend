import { Module } from '@nestjs/common';
import { FondosService } from './fondos.service';
import { FondosController } from './fondos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Fondo, FondoSchema } from './entities/fondo.entity';

@Module({
  controllers: [FondosController],
  providers: [FondosService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Fondo.name,
        schema: FondoSchema
      }
    ])
  ]
})
export class FondosModule {}
