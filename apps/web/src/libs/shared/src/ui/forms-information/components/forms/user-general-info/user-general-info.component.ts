import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  DOCUMENTS_TYPES,
  GENDERS,
  RH_TYPES,
  SHIRT_SIZES,
} from '@sacd/core/constants';
import { ControlInputComponent } from '../../../../control-field/components/control-input/control-input.component';
import { FormComponent } from '../../../directives/form-component.directive';
import {
  createUserGeneralInfoForm,
  UserGeneralInfoForm,
} from '../../../form-controls/user-general-info.form';

@Component({
  selector: 'ui-user-general-info',
  host: { class: 'form-section' },
  imports: [ReactiveFormsModule, ControlInputComponent],
  providers: [
    { provide: FormComponent, useExisting: UserGeneralInfoComponent },
  ],
  templateUrl: './user-general-info.component.html',
  styleUrl: './user-general-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserGeneralInfoComponent extends FormComponent<UserGeneralInfoForm> {
  protected readonly documentsTypes = DOCUMENTS_TYPES;

  protected readonly rhTypes = RH_TYPES;

  protected readonly shirtsSizes = SHIRT_SIZES;

  protected readonly genders = GENDERS;

  public override readonly type = 'generalInfo';

  public override readonly form = createUserGeneralInfoForm();
}
