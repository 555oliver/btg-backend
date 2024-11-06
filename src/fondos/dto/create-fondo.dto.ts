import { IsDecimal, IsInt, isInt, IsString, Min, MinLength } from "class-validator";

export class CreateFondoDto {
    @IsString()
    @MinLength(1)
    nombre_fondo: string;
    @IsInt()
    @Min(1)
    monto_minimo: number;
    @IsString()
    estado: string;
    @IsString()
    @MinLength(1)
    categoria_fondo: string;
    usuario:[]
}
