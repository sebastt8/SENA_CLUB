import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import { createAuthForm } from '../../form-controls/auth.form';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ControlInputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginComponent {
  protected readonly form = createAuthForm();

  onSubmit() {
    this.form.markAllAsTouched();
  }
}
