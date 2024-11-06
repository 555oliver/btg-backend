import { Test, TestingModule } from '@nestjs/testing';
import { TransacionesService } from './transaciones.service';

describe('TransacionesService', () => {
  let service: TransacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransacionesService],
    }).compile();

    service = module.get<TransacionesService>(TransacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
