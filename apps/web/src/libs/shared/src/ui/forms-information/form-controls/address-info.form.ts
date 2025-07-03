import { inject } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

export function createAddressInfoForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    departamento: ['', Validators.required],
    ciudad: ['', Validators.required],
    direccion: ['', Validators.required],
  });
}

export type AddressInfoForm = ReturnType<
  typeof createAddressInfoForm & Record<string, AbstractControl>
>;

export type AddressInfo = ReturnType<
  ReturnType<typeof createAddressInfoForm>['getRawValue']
>;
