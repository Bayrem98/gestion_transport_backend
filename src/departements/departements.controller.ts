import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

  @Get(':date')
  findByDate(@Param('date') date: string) {
    return this.departementsService.findByDate(date);
  }
}