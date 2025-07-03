import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
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
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { mapTrainerResponseToForm } from '../../../../core/utils/map-trainer.util';

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
  templateUrl: './trainer-edit.component.html',
  styleUrl: './trainer-edit.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainerEditComponent extends UserDetailsFormComponent {
  public readonly id = input.required<string>();

  protected readonly isLoading = signal(false);

  constructor(
    private readonly _trainerApi: TrainerApiService,
    private readonly _router: Router
  ) {
    super();

    toObservable(this.id)
      .pipe(
        switchMap((id) => this._trainerApi.getById(id)),
        takeUntilDestroyed()
      )
      .subscribe((trainer) => {
        this.form.patchValue(mapTrainerResponseToForm(trainer));
        this.form.markAllAsTouched();
      });
  }

  protected cancel(): void {
    this._router.navigate([AppRoutes.TrainerList]);
  }
}
