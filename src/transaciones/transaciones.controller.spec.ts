import { Test, TestingModule } from '@nestjs/testing';
import { TransacionesController } from './transaciones.controller';
import { TransacionesService } from './transaciones.service';

describe('TransacionesController', () => {
  let controller: TransacionesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransacionesController],
      providers: [TransacionesService],
    }).compile();

    controller = module.get<TransacionesController>(TransacionesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
