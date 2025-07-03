import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  Inject,
  signal,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ATHLETE_INACTIVATION_REASONS } from '@web/libs/athlete/constants';
import { AthleteApiService } from '@web/libs/athlete/services';
import { ControlInputComponent } from '@web/libs/shared/ui/control-field';
import { HeaderTitleComponent } from '@web/libs/shared/ui/titles';
import Swal from 'sweetalert2';
import { createAthleteInactivationForm } from '../../form-controls/athlete-inactivation.form';

@Component({
  selector: 'app-delete-athlete',
  host: { class: 'app-alert-dialog' },
  imports: [HeaderTitleComponent, ControlInputComponent, ReactiveFormsModule],
  templateUrl: './delete-athlete.component.html',
  styleUrl: './delete-athlete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteAthleteComponent {
  protected readonly inactivationReasons = ATHLETE_INACTIVATION_REASONS;

  protected readonly form = createAthleteInactivationForm();

  protected readonly isLoading = signal(false);

  constructor(
    protected readonly dialogRef: DialogRef<{ deleted: boolean } | undefined>,
    @Inject(DIALOG_DATA) protected readonly id: number,
    private readonly _athleteApiService: AthleteApiService
  ) {
    effect(() => {
      if (this.isLoading()) this.form.disable();
      else this.form.enable();
    });
  }

  public onDelete(): void {
    if (this.form.invalid) return;

    this.isLoading.set(true);
    const { reason, description } = this.form.getRawValue();
    this._athleteApiService
      .delete({ id: this.id, reason, description })
      .subscribe({
        next: () => {
          this.dialogRef.close({ deleted: true });
          Swal.fire({
            icon: 'success',
            title: 'Deportista inactivado correctamente',
            timer: 2000,
            showCancelButton: false,
          });
        },
        error: () => {
          Swal.fire({
            icon: 'error',
            title: 'Error al crear el deportista, intente de nuevo',
            timer: 2000,
            showCancelButton: false,
          });
        },
        complete: () => this.isLoading.set(false),
      });
  }
}
