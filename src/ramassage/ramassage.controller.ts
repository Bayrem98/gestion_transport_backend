import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { RamassageService } from './ramassage.service';
import { CreateRamassageDto } from './dto/create-ramassage.dto';

@Controller('ramassages')
export class RamassageController {
  constructor(private readonly ramassageService: RamassageService) {}

  @Post()
  create(@Body() createRamassageDto: CreateRamassageDto) {
    return this.ramassageService.create(createRamassageDto);
  }

  @Get()
  findAll() {
    return this.ramassageService.findAll();
  }

  @Get('date/:date')
  findByDate(@Param('date') date: string) {
    return this.ramassageService.findByDate(date);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ramassageService.remove(id);
  }
}
