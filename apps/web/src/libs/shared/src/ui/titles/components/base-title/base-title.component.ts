import { booleanAttribute, Directive, input } from '@angular/core';

@Directive({
  standalone: true,
})
export abstract class BaseTitleComponent {
  public readonly hideDivider = input(false, { transform: booleanAttribute });
}
