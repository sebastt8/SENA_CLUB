import { Dialog } from '@angular/cdk/dialog';
import { CdkTableModule } from '@angular/cdk/table';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { AthleteApiService } from '@web/libs/athlete/services';
import { IconButtonComponent } from '@web/libs/shared/ui/buttons';
import {
  DataTableApi,
  PaginatorComponent,
  SearchInputComponent,
} from '@web/libs/shared/ui/tables';
import { HeaderTitleComponent } from '@web/libs/shared/ui/titles';
import { AppRoutes } from '../../../../core/constants';
import { DeleteAthleteComponent } from '../../components/delete-athlete/delete-athlete.component';
import { DISPLAYED_COLUMNS } from '../../constants/athletes-list.constants';
import { AthleteStore } from '../../store/athlete.store';
import { filter } from 'rxjs';

@Component({
  selector: 'app-athletes-list',
  host: { class: 'page' },
  imports: [
    HeaderTitleComponent,
    RouterLink,
    CdkTableModule,
    IconButtonComponent,
    PaginatorComponent,
    ReactiveFormsModule,
    SearchInputComponent,
  ],
  providers: [
    { provide: DataTableApi, useClass: AthleteApiService },
    AthleteStore,
  ],
  templateUrl: './athletes-list.component.html',
  styleUrl: './athletes-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AthletesListComponent implements OnInit {
  protected readonly searchInput = new FormControl('', { nonNullable: true });

  protected readonly displayedColumns = DISPLAYED_COLUMNS;

  protected readonly appRoutes = AppRoutes;

  protected readonly athleteStore = inject(AthleteStore);

  constructor(private readonly _dialog: Dialog) {}

  public async ngOnInit(): Promise<void> {
    await this.athleteStore.loadData();
  }

  public onDelete(id: string): void {
    this._dialog
      .open<{ deleted: boolean } | undefined, string>(DeleteAthleteComponent, {
        data: id,
      })
      .closed.pipe(filter((result) => result !== undefined && result?.deleted))
      .subscribe(() => this.athleteStore.loadData());
  }

  public searchAthlete(): void {
    this.athleteStore.setQuery(this.searchInput.value);
  }

  public clearSearch(): void {
    this.searchInput.setValue('');
    this.athleteStore.setQuery('');
  }
}

