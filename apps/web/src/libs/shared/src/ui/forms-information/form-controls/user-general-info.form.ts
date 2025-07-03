import { inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export function createUserGeneralInfoForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    numeroDocumento: [
      '',
      [Validators.required, Validators.pattern('^[0-9]+$')],
    ],
    fechaNacimiento: ['', Validators.required],
    tipoRH: ['', Validators.required],
    genero: ['', Validators.required],
    peso: [50, [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    altura: [1.4, [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    tallaCamisa: ['S'],
    tallaCalzado: [38, [Validators.required, Validators.pattern('^[0-9]+$')]],
    tallaPantalon: [32, [Validators.required, Validators.pattern('^[0-9]+$')]],
  });
}

//Could be added new controls using the content projection
export type UserGeneralInfoForm = ReturnType<
  typeof createUserGeneralInfoForm & Record<string, AbstractControl>
>;

export type UserGeneralInfo = ReturnType<
  ReturnType<typeof createUserGeneralInfoForm>['getRawValue']
>;
