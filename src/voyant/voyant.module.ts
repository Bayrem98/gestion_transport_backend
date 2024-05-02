import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VoyantSchema } from './schemas/voyant.schema';
import { VoyantService } from './voyant.service';
import { VoyantController } from './voyant.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Voyant', schema: VoyantSchema }]),
  ],
  controllers: [VoyantController],
  providers: [VoyantService],
  exports: [VoyantService],
})
export class VoyantModule {}
