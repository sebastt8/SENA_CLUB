import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../core/constants/app-routes.constant';
import {
  mapAthleteResponseToForm,
  mapFormToAthleteRequest,
} from '../../../../core/utils/map-athletle.util';
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
import { switchMap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-athlete-edit',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    HeaderSubtitleComponent,
    UserGeneralInfoComponent,
    AddressInfoComponent,
    TutorInfoComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './athlete-edit.component.html',
  styleUrl: './athlete-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthleteEditComponent extends UserDetailsFormComponent {
  public readonly id = input.required<string>();
  
  protected readonly isLoading = signal(false);

  constructor(
    private readonly _athleteApi: AthleteApiService,
    private readonly _router: Router
  ) {
    super();

    toObservable(this.id)
      .pipe(
        switchMap((id) => this._athleteApi.getById(id)),
        takeUntilDestroyed()
      )
      .subscribe((athlete) => {
        this.form.patchValue(mapAthleteResponseToForm(athlete));
        this.form.markAllAsTouched();
      });
  }

  public updateAthlete(): void {
    this.form.markAllAsTouched();

    if (this.form.invalid) return;

    this._athleteApi
      .update(this.id(), mapFormToAthleteRequest(this.form))
      .subscribe({
        next: () => {
          this._router.navigate([AppRoutes.AthleteList]);
          this.isLoading.set(false);
          Swal.fire({
            icon: 'success',
            title: 'Deportista actualizado correctamente',
            timer: 2000,
            showCancelButton: false,
          });
        },
        error: () => {
          this.isLoading.set(false);
          Swal.fire({
            icon: 'error',
            title: 'Error al actualizar el deportista, intente de nuevo',
            showCancelButton: false,
          });
        },
      });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.AthleteList]);
  }
}
