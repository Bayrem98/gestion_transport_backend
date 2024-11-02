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
  destination?: string;
  @IsOptional()
  plateau?: string;
  @IsOptional()
  num_tel?: string;
}
