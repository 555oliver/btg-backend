import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';
let server: Handler;
let expressApp;
async function bootstrap() {
  if(!expressApp){
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api/v1');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    app.enableCors({
      origin: '*', // Cambia esto por la URL de tu frontend (Angular)
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
    await app.init();
    expressApp = app.getHttpAdapter().getInstance();
    return serverlessExpress({ app: expressApp });
  }
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
