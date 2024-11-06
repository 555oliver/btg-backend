import { IsEmail,  IsString, MaxLength, Min, MinLength } from 'class-validator';

export class LoginUsuarioDto {
  @IsString()
  @IsEmail()
  correo: string;
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  password: string;
}
