import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
} from '@angular/router';

export type RouterEventTypeSubPage =
  | NavigationEnd
  | NavigationCancel
  | NavigationError;
