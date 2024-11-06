import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Fondo } from 'src/fondos/entities/fondo.entity';
@Schema()
export class Usuario extends Document {
  @Prop({ index: true, required: true })
  nombre_usuario: string;
  @Prop({ index: true, required: true, unique: true })
  correo: string;
  @Prop({
    required: true,
    index: true,
    default: 0,
  })
  monto: number;
  @Prop({ index: true, required: true })
  password: string;
  @Prop({ type: [{ type:  Types.ObjectId, ref: Fondo?.name }] }) // Un array de referencias a la colección "Fondos"
  fondos:  Types.ObjectId[];
}
export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
