import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-menu-list',
  imports: [],
  host: { class: 'dropdown-menu' },
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListComponent implements AfterContentInit {
  constructor(private readonly _elementRef: ElementRef) {}

  public ngAfterContentInit(): void {
    const links = this._elementRef.nativeElement.querySelectorAll('a');

    for (const link of links) link.classList.add('dropdown-item');
  }
}
