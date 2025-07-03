import { inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TrainerInactivationReason } from '@web/libs/trainer/constants';

export function createTrainerInactivationForm() {
  const formBuilder = inject(FormBuilder);
  const form = formBuilder.nonNullable.group({
    inactivationReason: ['', Validators.required],
    descripcion: new FormControl({ value: '', disabled: true }),
  });
  const descriptionValidator = Validators.required;

  form.controls.inactivationReason.valueChanges.subscribe((value) => {
    const { descripcion } = form.controls;

    if (value === TrainerInactivationReason.Otro) {
      descripcion.addValidators(descriptionValidator);
      descripcion.enable();
    } else {
      descripcion.removeValidators(descriptionValidator);
      descripcion.disable();
      descripcion.reset();
    }

    descripcion.updateValueAndValidity();
    form.updateValueAndValidity();
  });

  return form;
}
