import { Component } from '@angular/core';

@Component({
  selector: 'button[ui-icon-button],a[ui-icon-button]',
  host: { class: 'btn btn-outline-primary btn-sm rounded-circle icon-btn' },
  standalone: true,
  template: ` <span class="material-symbols-outlined">
    <ng-content></ng-content>
  </span>`,
})
export class IconButtonComponent {}
