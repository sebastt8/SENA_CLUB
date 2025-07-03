import { FormGroup } from '@angular/forms';
import { AthleteRequest } from '@sacd/core/http/requests';
import { AthleteResponse } from '@sacd/core/http/responses';
import {
  AddressInfo,
  TutorInfo,
  UserDetailsFormModel,
  UserGeneralInfo,
} from '@web/libs/shared/ui/forms-information';

export function mapFormToAthleteRequest(
  form: FormGroup<UserDetailsFormModel>
): AthleteRequest {
  const { addressInfo, generalInfo, tutorInfo } = form.getRawValue();

  if (!generalInfo || !addressInfo || !tutorInfo) {
    throw new Error('Missing required fields');
  }

  return {
    personaClub: {
      tipoDocumento: generalInfo.tipoDocumento,
      numeroDocumento: String(generalInfo.numeroDocumento),
      idMunicipio: Number(addressInfo.ciudad),
      nombres: generalInfo.nombres,
      apellidos: generalInfo.apellidos,
      fechaNacimento: generalInfo.fechaNacimiento,
      tipoRh: generalInfo.tipoRH,
      peso: generalInfo.peso,
      altura: generalInfo.altura,
      correo: generalInfo.correo,
      numeroTelefono: String(generalInfo.telefono),
      tallaCamisa: generalInfo.tallaCamisa,
      tallaCalzado: String(generalInfo.tallaCalzado),
      tallaPantaloneta: String(generalInfo.tallaPantalon),
      genero: generalInfo.genero,
      direccion: addressInfo.direccion,
    },
    tutor: {
      nombres: tutorInfo.nombres,
      apellidos: tutorInfo.apellidos,
      correo: tutorInfo.correo,
      numeroDocumento: String(tutorInfo.numeroDocumento),
      tipoDocumento: tutorInfo.tipoDocumento,
      telefono: String(tutorInfo.telefono),
    },
  };
}

export function mapAthleteResponseToForm(
  athlete: AthleteResponse
): FormGroup<UserDetailsFormModel>['value'] {
  const { personaClub, tutor } = athlete;

  const generalInfo: UserGeneralInfo = {
    nombres: personaClub.nombres,
    apellidos: personaClub.apellidos,
    tipoDocumento: personaClub.tipoDocumento,
    numeroDocumento: personaClub.numeroDocumento,
    fechaNacimiento: String(personaClub.fechaNacimento).split('T')[0],
    tipoRH: personaClub.tipoRh ?? '',
    genero: personaClub.genero ?? '',
    peso: personaClub.peso ?? 0,
    altura: personaClub.altura ?? 0,
    correo: personaClub.correo ?? '',
    telefono: String(personaClub.numeroTelefono ?? ''),
    tallaCamisa: personaClub.tallaCamisa ?? '',
    tallaCalzado: Number(personaClub.tallaCalzado ?? 0),
    tallaPantalon: Number(personaClub.tallaPantaloneta ?? 0),
  };

  const tutorInfo: TutorInfo = {
    nombres: tutor.nombres,
    apellidos: tutor.apellidos,
    tipoDocumento: tutor.tipoDocumento,
    numeroDocumento: tutor.numeroDocumento,
    correo: tutor.correo,
    telefono: String(tutor.telefono ?? ''),
  };

  const addressInfo: AddressInfo = {
    departamento: String(personaClub.idDepartamento ?? ''),
    ciudad: String(personaClub.idMunicipio ?? ''),
    direccion: personaClub.direccion ?? '',
  };

  return {
    generalInfo,
    tutorInfo,
    addressInfo,
  };
}
