import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroCustomModule } from './ng-zorro-custom.module';
import { MarkdownModule } from 'ngx-markdown';

import { IconsProviderModule } from './icons-provider.module';
import { CodeBlockComponent } from './code-block/code-block.component';

@NgModule({
  imports: [
    CodeBlockComponent,
    CommonModule,
    IconsProviderModule,
    MarkdownModule.forChild(),
    NgZorroCustomModule,
  ],
  exports: [IconsProviderModule, NgZorroCustomModule, MarkdownModule, CodeBlockComponent],
})
export class SharedModule {}
