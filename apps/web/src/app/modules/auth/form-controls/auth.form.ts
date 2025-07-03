import { inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export function createAuthForm() {
  const formBuilder = inject(FormBuilder);

  return formBuilder.nonNullable.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });
}
