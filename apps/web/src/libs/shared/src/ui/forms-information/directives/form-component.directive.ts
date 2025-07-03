import { contentChildren, Directive } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { ControlInputComponent } from '../../control-field/components/control-input/control-input.component';
import { filter } from 'rxjs';
import { UserDetailsFormModel } from '../models/user-details-form-model';

@Directive({ standalone: true })
export abstract class FormComponent<T extends FormGroup> {
  private readonly _contentFields = contentChildren(ControlInputComponent);

  public abstract readonly form: T;

  public abstract readonly type: keyof UserDetailsFormModel;

  constructor() {
    //Dinamically add new controls added using the content projection
    toObservable(this._contentFields)
      .pipe(
        filter(({ length }) => length > 0),
        takeUntilDestroyed()
      )
      .subscribe((controls) => {
        controls.forEach(({ ngControl, attrFor }) => {
          if (ngControl() === undefined || ngControl()?.control === undefined)
            return;

          if (this.form.contains(attrFor()))
            throw new Error(
              "The control you're trying to add through content projection already exists"
            );

          this.form.setControl(attrFor(), ngControl()?.control);
        });
      });
  }

  public get value(): ReturnType<T['getRawValue']> {
    return this.form.getRawValue();
  }

  public get valid() {
    return this.form.valid;
  }

  public get invalid() {
    return this.form.invalid;
  }
}
