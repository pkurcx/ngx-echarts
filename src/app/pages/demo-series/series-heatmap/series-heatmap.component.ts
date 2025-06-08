import { Component } from '@angular/core';
import { NzPageHeaderComponent, NzPageHeaderBreadcrumbDirective } from 'ng-zorro-antd/page-header';
import { NzBreadCrumbComponent, NzBreadCrumbItemComponent } from 'ng-zorro-antd/breadcrumb';
import { RouterLink } from '@angular/router';
import { NzDividerComponent } from 'ng-zorro-antd/divider';
import { NzTabSetComponent, NzTabComponent, NzTabDirective } from 'ng-zorro-antd/tabs';
import { HeatmapCalendarComponent } from './heatmap-calendar/heatmap-calendar.component';
import { HeatmapDiscreteComponent } from './heatmap-discrete/heatmap-discrete.component';

@Component({
  selector: 'app-series-heatmap',
  templateUrl: './series-heatmap.component.html',
  styleUrl: './series-heatmap.component.scss',
  imports: [
    HeatmapCalendarComponent,
    HeatmapDiscreteComponent,
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
export class SeriesHeatmapComponent {}
