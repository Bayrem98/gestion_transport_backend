import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Departement, DepartementDocument } from './schemas/departement.schema';
import { CreateDepartementDto } from './dto/create-departement.dto';

@Injectable()
export class DepartementsService {
  constructor(
    @InjectModel(Departement.name)
    private departementModel: Model<DepartementDocument>,
  ) {}

  async create(
    createDepartementDto: CreateDepartementDto,
  ): Promise<Departement> {
    const createdDepartement = new this.departementModel(createDepartementDto);
    return createdDepartement.save();
  }

  async findAll(): Promise<Departement[]> {
    return this.departementModel.find().populate('lignes.salarie').exec();
  }

  async findOne(id: string): Promise<Departement> {
    return this.departementModel.findById(id).populate('lignes.salarie').exec();
  }

  async findByDate(date: string): Promise<Departement[]> {
    return this.departementModel
      .find({ date })
      .populate('lignes.salarie') // ← Ajout de populate ici aussi
      .exec();
  }

  async remove(id: string): Promise<Departement> {
    return this.departementModel.findByIdAndDelete(id).exec();
  }
}
