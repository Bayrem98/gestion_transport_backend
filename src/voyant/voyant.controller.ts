import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VoyantService } from './voyant.service';
import CreateVoyantDto from './dto/create-voyant.dto';
import { Voyant } from './voyant.interface';
import UpdateVoyantDto from './dto/update-voyant.dto';

@Controller('voyant')
export class VoyantController {
  constructor(private readonly voyantService: VoyantService) {}

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.voyantService.findOne(_id);
  }

  @Get()
  findAll() {
    return this.voyantService.findAll();
  }

  @Post()
  create(@Body() createVoyantDto: CreateVoyantDto): Promise<Voyant> {
    return this.voyantService.create(createVoyantDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateVoyantDto: UpdateVoyantDto,
  ): Promise<Voyant> {
    return this.voyantService.update(id, updateVoyantDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.voyantService.delete(id);
  }
}
