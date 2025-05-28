export class CreateDepartementDto {
  readonly lignes: {
    salarie: string;
    planning: string;
    heure: string;
    chauffeur: string;
    destination: string;
    plateau: string;
    num_tel: string;
  }[];
  readonly date: string;
}