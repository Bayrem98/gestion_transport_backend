import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Voyant, VoyantDocument } from './schemas/voyant.schema';
import { Model } from 'mongoose';
import CreateVoyantDto from './dto/create-voyant.dto';
import UpdateVoyantDto from './dto/update-voyant.dto';

@Injectable()
export class VoyantService {
  constructor(
    @InjectModel(Voyant.name) private voyantModel: Model<VoyantDocument>,
  ) {}

  async findOne(_id: string): Promise<Voyant> {
    return await this.voyantModel.findOne({ _id }).exec();
  }

  async findOneByUsername(nom: string): Promise<Voyant> {
    return this.voyantModel.findOne({ nom }).exec();
  }

  async findAll(): Promise<Voyant[]> {
    return await this.voyantModel.find().select('-password').exec();
  }

  async create(createVoyantDto: CreateVoyantDto): Promise<Voyant> {
    const user = await this.findOneByUsername(createVoyantDto.nom);
    if (user)
      throw new HttpException('Username already used', HttpStatus.BAD_REQUEST);
    const createdUser = new this.voyantModel(createVoyantDto);
    return createdUser.save();
  }

  async update(
    id: string,
    updateVoyantDto: UpdateVoyantDto,
  ): Promise</*UpdateResult*/ any> {
    return this.voyantModel.updateOne({ _id: id }, updateVoyantDto);
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.voyantModel.deleteOne({ _id: id });
  }
}
