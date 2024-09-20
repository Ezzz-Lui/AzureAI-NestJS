import { PartialType } from '@nestjs/mapped-types';
import { CreateAzureComputerVisionDto } from './create-azure-computer-vision.dto';

export class UpdateAzureComputerVisionDto extends PartialType(CreateAzureComputerVisionDto) {}
