import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Ramassage, RamassageDocument } from './schemas/ramassage.schema';
import { CreateRamassageDto } from './dto/create-ramassage.dto';

@Injectable()
export class RamassageService {
  constructor(
    @InjectModel(Ramassage.name)
    private ramassageModel: Model<RamassageDocument>,
  ) {}

  async create(createRamassageDto: CreateRamassageDto): Promise<Ramassage> {
    const createdRamassage = new this.ramassageModel(createRamassageDto);
    return createdRamassage.save();
  }

  async findAll(): Promise<Ramassage[]> {
    return this.ramassageModel.find().populate('lignes.salarie').exec();
  }

  async findByDate(date: string): Promise<Ramassage[]> {
    return this.ramassageModel.find({ date }).populate('lignes.salarie').exec();
  }

  async remove(id: string): Promise<Ramassage> {
    return this.ramassageModel.findByIdAndDelete(id).exec();
  }
}
