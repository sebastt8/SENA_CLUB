import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { DataTablePaginator } from '../../models/datatable.model';

@Component({
  selector: 'ui-paginator',
  standalone: true,
  imports: [],
  host: { class: 'd-flex gap-3 justify-content-end align-items-center' },
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  protected readonly length = computed(() => this.dataTable().length());

  protected readonly pageSize = computed(
    () => this.dataTable().pagination().pageSize
  );

  protected readonly disablePrevBtn = computed(() => {
    const { page } = this.dataTable().pagination();
    return page === 0;
  });

  protected readonly disableNextBtn = computed(() => {
    const { page, pageSize } = this.dataTable().pagination();
    const endIndex = (page + 1) * pageSize;
    return endIndex >= this.length();
  });

  protected readonly resume = computed(() => {
    const { page, pageSize } = this.dataTable().pagination();
    const startIndex = page * pageSize + 1;
    const endIndex = Math.min(pageSize + 1, this.length());
    return `${startIndex} - ${endIndex} de ${this.length()}`;
  });

  public readonly dataTable = input.required<DataTablePaginator>();

  public readonly pageSizeOptions = input<number[]>([2, 5, 10, 25, 100]);

  protected setPageSize(value: string): void {
    this.dataTable().setPageSize(Number(value));
  }
}
