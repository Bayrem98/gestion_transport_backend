import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Voyant } from 'src/voyant/schemas/voyant.schema';

export type DepartementDocument = Departement & Document;

@Schema({ _id: false })
class LigneDepartement {
  @Prop({ type: Types.ObjectId, ref: 'Voyant', required: true })
  salarie: Types.ObjectId | Voyant; // Référence au voyant

  @Prop({ required: true })
  planning: string;

  @Prop({ required: true })
  heure: string;

  @Prop({ required: true })
  chauffeur: string;

  @Prop({ required: true })
  destination: string;

  @Prop({ required: true })
  plateau: string;

  @Prop({ required: true })
  num_tel: string;
}

@Schema({ timestamps: true })
export class Departement {
  @Prop({ type: [LigneDepartement], required: true })
  lignes: LigneDepartement[];

  @Prop({ required: true })
  date: string;
}

export const DepartementSchema = SchemaFactory.createForClass(Departement);