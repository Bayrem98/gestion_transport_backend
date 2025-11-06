import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Voyant } from 'src/voyant/schemas/voyant.schema';

export type RamassageDocument = Ramassage & Document;

@Schema({ _id: false })
class LigneRamassage {
  @Prop({ type: Types.ObjectId, ref: 'Voyant', required: true })
  salarie: Types.ObjectId | Voyant;

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
export class Ramassage {
  @Prop({ type: [LigneRamassage], required: true })
  lignes: LigneRamassage[];

  @Prop({ required: true })
  date: string;
}

export const RamassageSchema = SchemaFactory.createForClass(Ramassage);