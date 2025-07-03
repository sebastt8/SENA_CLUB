import { Directive, HostBinding } from '@angular/core';
import { MenuSectionDirective } from './menu-section.directive';

@Directive({
  selector: 'app-menu-title-section',
  host: {
    class: 'nav-link d-flex align-items-center gap-1 dropdown-toggle',
    'data-bs-toggle': 'dropdown',
  },
  standalone: true,
})
export class MenuTitleSectionDirective {
  @HostBinding('class.active')
  protected get isActive() {
    return this.menuSection.isActive;
  }

  constructor(protected readonly menuSection: MenuSectionDirective) {}
}
