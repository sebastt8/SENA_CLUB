import { EventType } from '@angular/router';

export const RouterEventSubPage = new Set([
  EventType.NavigationEnd,
  EventType.NavigationCancel,
  EventType.NavigationError,
]);
