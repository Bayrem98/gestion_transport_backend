import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { DepartementsService } from './departements.service';
import { CreateDepartementDto } from './dto/create-departement.dto';

@Controller('departements')
export class DepartementsController {
  constructor(private readonly departementsService: DepartementsService) {}

  @Post()
  create(@Body() createDepartementDto: CreateDepartementDto) {
    return this.departementsService.create(createDepartementDto);
  }

  @Get()
  findAll() {
    return this.departementsService.findAll();
  }

  @Get('date/:date') // ← Changé pour éviter le conflit
  findByDate(@Param('date') date: string) {
    return this.departementsService.findByDate(date);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.departementsService.findOne(id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.departementsService.remove(id);
  }
}
