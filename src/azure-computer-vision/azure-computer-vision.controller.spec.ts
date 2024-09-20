import { Test, TestingModule } from '@nestjs/testing';
import { AzureComputerVisionController } from './azure-computer-vision.controller';
import { AzureComputerVisionService } from './azure-computer-vision.service';

describe('AzureComputerVisionController', () => {
  let controller: AzureComputerVisionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AzureComputerVisionController],
      providers: [AzureComputerVisionService],
    }).compile();

    controller = module.get<AzureComputerVisionController>(AzureComputerVisionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
