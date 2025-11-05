import { IsArray, IsString, ValidateNested, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

class LigneDepartementDto {
  @IsMongoId()
  salarie: string; // Doit être l'ID d'un voyant existant

  @IsString()
  planning: string;

  @IsString()
  heure: string;

  @IsString()
  chauffeur: string;

  @IsString()
  destination: string;

  @IsString()
  plateau: string;

  @IsString()
  num_tel: string;
}

export class CreateDepartementDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LigneDepartementDto)
  lignes: LigneDepartementDto[];

  @IsString()
  date: string;
}