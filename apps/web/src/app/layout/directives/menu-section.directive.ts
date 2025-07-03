import { Directive, input, signal } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { AppBaseRoutesType } from '../../core/constants';


@Directive({
  selector: 'app-menu-section',
  host: { class: 'nav-item dropdown mx-2' },
  hostDirectives: [
    {
      directive: RouterLinkActive,
      inputs: ['routerLinkActive:urlActive', 'routerLinkActiveOptions'],
    },
  ],
  standalone: true,
  exportAs: 'appMenuSection',
})
export class MenuSectionDirective {
  public readonly baseUrl = input.required<AppBaseRoutesType>();

  public subPageActive = signal(false);

  public get isActive() {
    return this.subPageActive() || this._rla.isActive;
  }

  constructor(private readonly _rla: RouterLinkActive) {
    this._rla.routerLinkActiveOptions = { exact: true };
  }
}
