import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NGLGridComponent } from './ngl.grid.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { NGLGridService } from './sample.service';

export * from './ngl.grid.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';
export * from './models/ngl-model';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    NGLGridComponent,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    NGLGridComponent,
    SampleDirective,
    SamplePipe
  ]
})
export class NGLGridModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGLGridModule,
      providers: [NGLGridService]
    };
  }
}
