import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTitleComponent } from '../base-title/base-title.component';

@Component({
  selector: 'ui-header-title',
  imports: [],
  templateUrl: './header-title.component.html',
  styleUrl: './header-title.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderTitleComponent extends BaseTitleComponent {}
