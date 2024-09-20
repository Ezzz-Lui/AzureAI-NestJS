import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AzureComputerVisionService } from './azure-computer-vision.service';
import { CreateAzureComputerVisionDto } from './dto/create-azure-computer-vision.dto';
import { UpdateAzureComputerVisionDto } from './dto/update-azure-computer-vision.dto';

@Controller('azure-computer-vision')
export class AzureComputerVisionController {
  constructor(private readonly azureComputerVisionService: AzureComputerVisionService) {}

  @Post()
  create(@Body() createAzureComputerVisionDto: CreateAzureComputerVisionDto) {
    return this.azureComputerVisionService.create(createAzureComputerVisionDto);
  }

  @Get()
  findAll() {
    return this.azureComputerVisionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.azureComputerVisionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAzureComputerVisionDto: UpdateAzureComputerVisionDto) {
    return this.azureComputerVisionService.update(+id, updateAzureComputerVisionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.azureComputerVisionService.remove(+id);
  }
}
