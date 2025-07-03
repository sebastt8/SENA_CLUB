import { inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AthleteInactivationReason } from '@web/libs/athlete/constants';

export function createAthleteInactivationForm() {
  const formBuilder = inject(FormBuilder);
  const form = formBuilder.nonNullable.group({
    reason: ['', Validators.required],
    description: new FormControl({ value: '', disabled: true }),
  });
  const descriptionValidator = Validators.required;

  form.controls.reason.valueChanges.subscribe((value) => {
    const { description: descripcion } = form.controls;

    if (value === AthleteInactivationReason.Otro) {
      descripcion.addValidators(descriptionValidator);
      descripcion.enable();
    } else {
      descripcion.removeValidators(descriptionValidator);
      descripcion.disable();
    }

    descripcion.updateValueAndValidity();
  });

  return form;
}
