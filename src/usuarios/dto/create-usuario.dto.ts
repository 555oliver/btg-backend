import { IsArray, IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator';
import { Fondo } from 'src/fondos/entities/fondo.entity';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(1)
  nombre_usuario: string;
  @IsString()
  @MinLength(5)
  correo: string;
  @IsInt()
  @Min(500000, {message: 'El monto inicial para empezar debe ser mayor a $500.000'})
  monto: number;
  @IsString()
  @MinLength(5, {message: 'La Contraseña debe ser mayor a 5 caracteres'})
  password: string;
  @IsArray()
  fondos: string[]
}
