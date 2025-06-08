import { Component, Input, inject } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AppMenu, APP_MENUS } from '../../menus';
import { NzMenuDirective, NzMenuItemComponent, NzSubMenuComponent } from 'ng-zorro-antd/menu';
import { NgFor, NgIf } from '@angular/common';
import { ɵNzTransitionPatchDirective } from 'ng-zorro-antd/core/transition-patch';
import { NzIconDirective } from 'ng-zorro-antd/icon';

interface AppMenuEx extends AppMenu {
  pathRegex: RegExp;
}

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss'],
  imports: [
    NgFor,
    NgIf,
    NzIconDirective,
    NzMenuDirective,
    NzMenuItemComponent,
    NzSubMenuComponent,
    RouterLink,
    RouterLinkActive,
    ɵNzTransitionPatchDirective,
  ],
})
export class AppMenuComponent {
  private readonly router = inject(Router);

  @Input() isCollapsed: boolean;
  menus: AppMenuEx[];
  currentUrl: string;

  constructor() {
    const router = this.router;

    router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: NavigationEnd) => {
      this.currentUrl = e.url;
    });
    this.menus = APP_MENUS.map(m => ({
      path: m.path,
      pathRegex: new RegExp(m.path),
      text: m.text,
      icon: m.icon,
      iconTheme: m.iconTheme,
      submenus: m.submenus ? m.submenus.concat() : undefined,
    }));
  }
}
