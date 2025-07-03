export interface PersonClubRequest {
  tipoDocumento: string;
  numeroDocumento: string;
  idMunicipio: number;
  nombres: string;
  apellidos: string;
  fechaNacimento: string;
  tipoRh: string;
  peso: number;
  altura: number;
  correo: string;
  numeroTelefono: string;
  tallaCamisa: string;
  tallaCalzado: string;
  tallaPantaloneta: string;
  genero: string;
  direccion?: string;
}
