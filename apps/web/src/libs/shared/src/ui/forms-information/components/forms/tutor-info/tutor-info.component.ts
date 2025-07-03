import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DOCUMENTS_TYPES } from '@sacd/core/constants';
import { ControlInputComponent } from '../../../../control-field/components/control-input/control-input.component';
import { FormComponent } from '../../../directives/form-component.directive';
import {
  TutorInfoForm,
  createTutorInfoForm,
} from '../../../form-controls/tutor-info.form';

@Component({
  selector: 'ui-tutor-info',
  host: { class: 'form-section' },
  imports: [ReactiveFormsModule, ControlInputComponent],
  providers: [{ provide: FormComponent, useExisting: TutorInfoComponent }],
  templateUrl: './tutor-info.component.html',
  styleUrl: './tutor-info.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TutorInfoComponent extends FormComponent<TutorInfoForm> {
  protected readonly documentsTypes = DOCUMENTS_TYPES;

  public override readonly type = 'tutorInfo';

  public readonly form = createTutorInfoForm();
}
