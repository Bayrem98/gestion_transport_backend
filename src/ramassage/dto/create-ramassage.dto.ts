import { IsArray, IsString, ValidateNested, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

class LigneRamassageDto {
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

export class CreateRamassageDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LigneRamassageDto)
  lignes: LigneRamassageDto[];

  @IsString()
  date: string;
}