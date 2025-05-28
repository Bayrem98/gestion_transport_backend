import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DepartementsController } from './departements.controller';
import { DepartementsService } from './departements.service';
import { Departement, DepartementSchema } from './schemas/departement.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Departement.name, schema: DepartementSchema },
    ]),
  ],
  controllers: [DepartementsController],
  providers: [DepartementsService],
})
export class DepartementsModule {}