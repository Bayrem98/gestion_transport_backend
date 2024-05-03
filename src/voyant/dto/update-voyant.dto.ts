import { IsMongoId, IsOptional } from 'class-validator';

export default class UpdateVoyantDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  nom?: string;
  @IsOptional()
  planing?: string;
  @IsOptional()
  heure?: string;
  @IsOptional()
  chauffeur?: string;
  @IsOptional()
  destination?: string;
  @IsOptional()
  situation?: string;
  @IsOptional()
  date?: string;
}
