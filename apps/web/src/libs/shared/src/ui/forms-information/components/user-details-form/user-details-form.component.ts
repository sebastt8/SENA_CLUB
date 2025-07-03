import { Directive, viewChildren } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { FormComponent } from '../../directives/form-component.directive';
import { UserDetailsFormModel } from '../../models/user-details-form-model';

@Directive({
  standalone: true,
})
export abstract class UserDetailsFormComponent {
  private readonly _componentsForms = viewChildren(FormComponent);

  public readonly form = new FormGroup<UserDetailsFormModel>({});

  constructor() {
    toObservable(this._componentsForms)
      .pipe(takeUntilDestroyed())
      .subscribe((components) =>
        components.forEach(({ type, form }) => this.form.setControl(type, form))
      );
  }
}
