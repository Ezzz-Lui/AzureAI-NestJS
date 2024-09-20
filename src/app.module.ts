import { Module } from '@nestjs/common';
import { AzureComputerVisionModule } from './azure-computer-vision/azure-computer-vision.module';

@Module({
  imports: [AzureComputerVisionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
