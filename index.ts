import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NGLGridComponent } from './src/ngl.grid.component';
import { SampleDirective } from './src/sample.directive';
import { SamplePipe } from './src/sample.pipe';
import { NGLGridService } from './src/sample.service';

export * from './src/ngl.grid.component';
export * from './src/sample.directive';
export * from './src/sample.pipe';
export * from './src/sample.service';

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
