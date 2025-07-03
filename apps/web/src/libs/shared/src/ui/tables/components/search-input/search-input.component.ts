import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';
import { DataTableSearch } from '../../models/datatable.model';

@Component({
  selector: 'ui-search-input',
  imports: [ReactiveFormsModule],
  host: { class: 'w-50 d-flex flex-column' },
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchInputComponent {
  protected readonly searchInput = new FormControl('', { nonNullable: true });

  public readonly hasValue = toSignal(
    this.searchInput.valueChanges.pipe(map((value) => Boolean(value.trim()))),
    { initialValue: false }
  );

  public readonly placeholderText = input<string>('Buscar');

  public readonly dataTable = input.required<DataTableSearch>();

  public search(): void {
    this.dataTable().setQuery(this.searchInput.value);
  }

  public clear(): void {
    this.searchInput.reset();
    this.dataTable().setQuery('');
  }
}
