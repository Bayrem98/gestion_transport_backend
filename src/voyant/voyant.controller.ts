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
  findAll(@Query('num_tel') num_tel: string, @Query('plateau') plateau: string) {
    if (num_tel && plateau) {
      return this.voyantService.search(num_tel, plateau);
    } else if (num_tel) {
      return this.voyantService.search(num_tel, '');
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
