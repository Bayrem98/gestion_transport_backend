import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VoyantDocument = Voyant & Document;

@Schema()
export class Voyant {
  @Prop({ require: true, type: String })
  nom: string;
  @Prop({ require: true, type: String })
  planing: string;
  @Prop({ require: true, type: String })
  heure: string;
  @Prop({ require: true, type: String })
  destination: string;
  @Prop({ require: true, type: String })
  plateau: string;
  @Prop({ require: true, type: String })
  num_tel: string;
}

export const VoyantSchema = SchemaFactory.createForClass(Voyant);
