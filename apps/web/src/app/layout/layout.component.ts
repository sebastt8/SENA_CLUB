import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Injector,
  runInInjectionContext,
  viewChildren,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { combineLatest, filter } from 'rxjs';

import { AppBaseRoutes, AppRoutes } from '../core/constants';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { RouterEventSubPage } from './constants';
import { MenuItemDirective } from './directives/menu-item.directive';
import { MenuSectionDirective } from './directives/menu-section.directive';
import { MenuTitleSectionDirective } from './directives/menu-title-section.directive';
import { RouterEventTypeSubPage } from './models';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    RouterLink,
    MenuSectionDirective,
    MenuTitleSectionDirective,
    MenuListComponent,
    MenuItemDirective,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent implements AfterViewInit {
  private readonly _menuSections = viewChildren(MenuSectionDirective);

  protected readonly appRoutes = AppRoutes;

  protected readonly appBaseRoutes = AppBaseRoutes;

  constructor(
    private readonly _router: Router,
    private readonly _injector: Injector
  ) {}

  public ngAfterViewInit(): void {
    runInInjectionContext(this._injector, () => {
      combineLatest([
        toObservable(this._menuSections).pipe(
          filter(({ length }) => length > 0)
        ),
        this._router.events.pipe(
          filter(({ type }) => RouterEventSubPage.has(type))
        ),
      ])
        .pipe(takeUntilDestroyed())
        .subscribe(([menuSections, event]) => {
          const { url } = event as RouterEventTypeSubPage;
          const [, currentUrlBase] = url.split('/');

          if (currentUrlBase === undefined) return;

          menuSections.forEach((menuSection) => {
            menuSection.subPageActive.set(
              currentUrlBase === menuSection.baseUrl()
            );
          });
        });
    });
  }
}
