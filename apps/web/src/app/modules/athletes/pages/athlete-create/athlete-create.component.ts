import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../core/constants/app-routes.constant';
import { mapFormToAthleteRequest } from '../../../../core/utils/map-athletle.util';
import { AthleteApiService } from '@web/libs/athlete/services';
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
  templateUrl: './athlete-create.component.html',
  styleUrl: './athlete-create.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteCreateComponent extends UserDetailsFormComponent {
  protected readonly isLoading = signal(false);

  constructor(
    private readonly _athleteApi: AthleteApiService,
    private readonly _router: Router
  ) {
    super();
  }

  protected create(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this.isLoading.set(true);
    this._athleteApi.create(mapFormToAthleteRequest(this.form)).subscribe({
      next: () => {
        this._router.navigate([AppRoutes.AthleteList]);
        this.isLoading.set(false);
        Swal.fire({
          icon: 'success',
          title: 'Deportista creado correctamente',
          timer: 2000,
          showCancelButton: false,
        });
      },
      error: () => {
        this.isLoading.set(false);
        Swal.fire({
          icon: 'error',
          title: 'Error al crear el deportista, intente de nuevo',
          showCancelButton: false,
        });
      },
    });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.AthleteList]);
  }
}
