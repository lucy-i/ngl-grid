import { Component, Input } from '@angular/core';
import { NGLOption } from "./models/ngl-model";

@Component({
  selector: 'ngl-grid-component',
  templateUrl: './ngl.grid.component.html'
})
export class NGLGridComponent {
  @Input("option")
  gridOptions:NGLOption;
  constructor() {
  }

}
