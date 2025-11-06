import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Ramassage, RamassageSchema } from './schemas/ramassage.schema';
import { RamassageController } from './ramassage.controller';
import { RamassageService } from './ramassage.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Ramassage.name, schema: RamassageSchema },
    ]),
  ],
  controllers: [RamassageController],
  providers: [RamassageService],
})
export class RamassageModule {}
