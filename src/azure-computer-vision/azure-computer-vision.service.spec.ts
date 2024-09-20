import { Test, TestingModule } from '@nestjs/testing';
import { AzureComputerVisionService } from './azure-computer-vision.service';

describe('AzureComputerVisionService', () => {
  let service: AzureComputerVisionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AzureComputerVisionService],
    }).compile();

    service = module.get<AzureComputerVisionService>(AzureComputerVisionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
