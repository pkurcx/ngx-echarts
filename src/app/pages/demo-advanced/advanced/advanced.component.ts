import { Component } from '@angular/core';
import { NzPageHeaderComponent, NzPageHeaderBreadcrumbDirective } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzTabSetComponent, NzTabComponent, NzTabDirective } from 'ng-zorro-antd/tabs';
import { ConnectChartsComponent } from './connect-charts/connect-charts.component';
import { LineDraggableComponent } from './line-draggable/line-draggable.component';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss'],
  imports: [
    ConnectChartsComponent,
    LineDraggableComponent,
    NzBreadCrumbComponent,
    NzBreadCrumbItemComponent,
    NzDividerComponent,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderComponent,
    NzTabComponent,
    NzTabDirective,
    NzTabSetComponent,
    RouterLink,
  ],
})
export class AdvancedComponent {
  constructor() {}
}
