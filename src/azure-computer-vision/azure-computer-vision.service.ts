import { Injectable } from '@nestjs/common';
import { CreateAzureComputerVisionDto } from './dto/create-azure-computer-vision.dto';
import { UpdateAzureComputerVisionDto } from './dto/update-azure-computer-vision.dto';

@Injectable()
export class AzureComputerVisionService {
  create(createAzureComputerVisionDto: CreateAzureComputerVisionDto) {
    return 'This action adds a new azureComputerVision';
  }

  findAll() {
    return `This action returns all azureComputerVision`;
  }

  findOne(id: number) {
    return `This action returns a #${id} azureComputerVision`;
  }

  update(id: number, updateAzureComputerVisionDto: UpdateAzureComputerVisionDto) {
    return `This action updates a #${id} azureComputerVision`;
  }

  remove(id: number) {
    return `This action removes a #${id} azureComputerVision`;
  }
}
