import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { IconButtonComponent } from '@web/libs/shared/ui/buttons';
import {
  DataTableApi,
  PaginatorComponent,
  SearchInputComponent,
} from '@web/libs/shared/ui/tables';
import { HeaderTitleComponent } from '@web/libs/shared/ui/titles';
import { TrainerApiService } from '@web/libs/trainer/services';
import { AppRoutes } from '../../../../core/constants';
import { DeleteTrainerComponent } from '../../components/delete-trainer/delete-trainer.component';
import { DISPLAYED_COLUMNS } from '../../constant/trainer-list.constant';
import { TrainerStore } from '../../store/trainer.store';

@Component({
  selector: 'app-trainers-list',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    RouterLink,
    CdkTableModule,
    IconButtonComponent,
    PaginatorComponent,
    DatePipe,
    SearchInputComponent,
  ],
  providers: [
    { provide: DataTableApi, useClass: TrainerApiService },
    TrainerStore,
  ],
  templateUrl: './trainers-list.component.html',
  styleUrl: './trainers-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrainersListComponent implements OnInit {
  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected readonly trainerStore = inject(TrainerStore);

  constructor(private readonly _dialog: Dialog) {}

  public async ngOnInit(): Promise<void> {
    await this.trainerStore.loadData();
  }

  public onDelete(): void {
    this._dialog.open(DeleteTrainerComponent);
  }
}
