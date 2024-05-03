import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { VoyantService } from './voyant.service';
import CreateVoyantDto from './dto/create-voyant.dto';
import { Voyant } from './voyant.interface';
import UpdateVoyantDto from './dto/update-voyant.dto';

@Controller('voyant')
export class VoyantController {
  constructor(private readonly voyantService: VoyantService) {}

  @Get()
  findAll(@Query('situation') situation: string, @Query('date') date: string) {
    if (situation && date) {
      return this.voyantService.search(situation, date);
    } else if (situation) {
      return this.voyantService.search(situation, '');
    } else {
      return this.voyantService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.voyantService.findOne(_id);
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
