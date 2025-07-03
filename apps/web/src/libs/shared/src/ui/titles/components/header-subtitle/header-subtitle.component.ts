import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseTitleComponent } from '../base-title/base-title.component';

@Component({
  selector: 'ui-header-subtitle',
  imports: [],
  templateUrl: './header-subtitle.component.html',
  styleUrl: './header-subtitle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSubtitleComponent extends BaseTitleComponent {}
