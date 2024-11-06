import { IsArray, IsDate, IsDateString, IsInt, IsObject, IsOptional, IsString, Min } from "class-validator";

export class CreateTransacioneDto {
    @IsInt()
    @Min(1)
    saldo: number;
    @IsOptional()
    @IsDateString()
    readonly fecha_creacion?: Date;
    @IsString()
    tipo_accion: string;
    @IsString()
    fondo: string;
    @IsString()
    usuario: string;
}
