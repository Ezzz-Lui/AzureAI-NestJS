import { Module } from '@nestjs/common';
import { AzureComputerVisionService } from './azure-computer-vision.service';
import { AzureComputerVisionController } from './azure-computer-vision.controller';

@Module({
  controllers: [AzureComputerVisionController],
  providers: [AzureComputerVisionService],
})
export class AzureComputerVisionModule {}
