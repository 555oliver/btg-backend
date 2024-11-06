import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateTransacioneDto } from './dto/create-transacione.dto';
import { UpdateTransacioneDto } from './dto/update-transacione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Transacione } from './entities/transacione.entity';
import { Model } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Fondo } from 'src/fondos/entities/fondo.entity';
import { MailerService } from '@nestjs-modules/mailer';
@Injectable()
export class TransacionesService {
  private transporter: nodemailer.Transporter;
  constructor(
    @InjectModel(Transacione.name)
    private readonly transacioneModel: Model<Transacione>,
    @InjectModel(Usuario.name)
    private readonly usuariosModel: Model<Usuario>,
    @InjectModel(Fondo.name)
    private readonly fondosModel: Model<Fondo>,
    private readonly mailService: MailerService
  ) {

  }
  async create(createTransacioneDto: CreateTransacioneDto) {
    const transaciones =
      await this.transacioneModel.create(createTransacioneDto);
    const { usuario, saldo, fondo } = createTransacioneDto;
    const userData = await this.findOneUser(usuario);
    const fondoData = await this.findOneFondo(fondo);
    const to = userData.correo;
    const text = `Señor ${userData.nombre_usuario} a creado una nueva Apertura con el fondo ${fondoData.nombre_fondo} por un valor de ${saldo}`;
    this.sendEmail(to, text);
    return transaciones;
  }

  findAll() {
    const sortOrder = -1; // 1 para ascendente, -1 para descendente
    return this.transacioneModel
      .find()
      .sort({ fecha_creacion: sortOrder })
      .populate('fondo')
      .populate('usuario')
      .exec();
  }

  findOne(id: string) {
    const sortOrder = -1; // 1 para ascendente, -1 para descendente
    return this.transacioneModel
      .findById(id)
      .sort({ fecha_creacion: sortOrder })
      .populate('fondo')
      .populate('usuario')
      .exec();
  }

  findOneUser(id: string) {
    return this.usuariosModel.findById(id);
  }

  findOneFondo(id: string) {
    return this.fondosModel.findById(id);
  }

  async update(id: string, updateTransacioneDto: UpdateTransacioneDto) {
    const transacion = await this.transacioneModel.findById(id);
    if (!transacion)
      throw new UnauthorizedException(
        `No se encontro esa transacción con id ${id}`,
      );

    await transacion.updateOne(updateTransacioneDto);
    return { ...transacion.toJSON(), ...updateTransacioneDto };
  }

   sendEmail(to: string, text: string, html?: string) {
    try {
       this.mailService.sendMail({
        from: 'fcharry1962@gmail.com', // Dirección del remitente
        to: to, // Dirección del destinatario
        subject: 'Inscripción nuevo Fondo', // Asunto
        text,
      });
    } catch (error) {
      console.error('Error enviando correo: ', error);
      throw error;
    }
  }
}
