export interface PersonClubResponse {
    id: number;
    tipoDocumento: string;
    numeroDocumento: string;
    idMunicipio: number;
    idDepartamento: number;
    nombres: string;
    apellidos: string;
    fechaNacimento?: Date;
    tipoRh?: string;
    peso?: number;
    altura?: number;
    correo: string;
    numeroTelefono?: string;
    tallaCamisa?: string;
    tallaCalzado?: string;
    tallaPantaloneta?: string;
    genero?: string;
    direccion?: string;
  }
  