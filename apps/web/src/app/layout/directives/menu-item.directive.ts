import { Directive, HostBinding } from '@angular/core';
import { RouterLinkActive } from '@angular/router';

@Directive({
  selector: '[appMenuItem]',
  host: { class: 'nav-item nav-link d-flex align-content-start gap-1 mx-2' },
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: ['routerLinkActive:urlActive', 'routerLinkActiveOptions'],
    },
  ],
  standalone: true,
})
export class MenuItemDirective {
  @HostBinding('class.active')
  protected get isActive() {
    return this._rla.isActive;
  }

  constructor(private readonly _rla: RouterLinkActive) {
    this._rla.routerLinkActiveOptions = { exact: true };
  }
}
