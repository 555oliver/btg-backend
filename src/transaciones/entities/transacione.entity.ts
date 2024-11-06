import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Fondo } from 'src/fondos/entities/fondo.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';

@Schema()
export class Transacione extends Document {
  @Prop({
    required: true,
    index: true,
    default: 0,
  })
  saldo: number;
  @Prop({ type: Date, default: Date.now }) // El valor por defecto será la fecha y hora actual
  fecha_creacion: Date;
  @Prop({ required: true, enum: ['Apertura', 'Cancelación'] })
  tipo_accion: string;
  @Prop({ type:  Types.ObjectId, ref: Fondo?.name }) // Un Objecto de referencias a la colección "Fondos"
  fondo: Types.ObjectId;
  @Prop({ type:  Types.ObjectId, ref: Usuario?.name }) // Un Objecto de referencias a la colección "Usuario"
  usuario: Types.ObjectId;
}

export const TransacionesSchema = SchemaFactory.createForClass(Transacione);
