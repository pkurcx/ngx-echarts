import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxEchartsDirective } from './ngx-echarts.directive';
import { provideEchartsCore } from './provide';
import { NgxEchartsConfig } from './config';

@NgModule({
  imports: [NgxEchartsDirective],
  exports: [NgxEchartsDirective],
})
export class NgxEchartsModule {
  static forRoot(config: NgxEchartsConfig): ModuleWithProviders<NgxEchartsModule> {
    return {
      ngModule: NgxEchartsModule,
      providers: [provideEchartsCore(config)],
    };
  }
  static forChild(): ModuleWithProviders<NgxEchartsModule> {
    return {
      ngModule: NgxEchartsModule,
    };
  }
}
