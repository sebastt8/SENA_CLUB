import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AddressInfoComponent,
  TutorInfoComponent,
  UserDetailsFormComponent,
  UserGeneralInfoComponent,
} from '@web/libs/shared/ui/forms-information';
import {
  HeaderSubtitleComponent,
  HeaderTitleComponent,
} from '@web/libs/shared/ui/titles';
import { TrainerApiService } from '@web/libs/trainer/services';
import { AppRoutes } from '../../../../core/constants/app-routes.constant';
import { mapFormToTrainerRequest } from '../../../../core/utils/map-trainer.util';
import Swal from 'sweetalert2';

@Component({
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './trainer-create.component.html',
  styleUrl: './trainer-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerCreateComponent extends UserDetailsFormComponent {
  protected readonly isLoading = signal(false);

  constructor(
    private readonly _trainerApi: TrainerApiService,
    private readonly _router: Router
  ) {
    super();
  }

  protected create(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.isLoading.set(true);
    this._trainerApi.create(mapFormToTrainerRequest(this.form)).subscribe({
      next: () => {
        this._router.navigate([AppRoutes.TrainerList]);
        this.isLoading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Entrenador creado correctamente',
          timer: 2000,
          showCancelButton: false,
        });
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error al crear el entrenador, intente de nuevo',
          showCancelButton: false,
        });
      },
    });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.TrainerList]);
  }
}
