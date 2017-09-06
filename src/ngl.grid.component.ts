import { Component, Input, OnInit } from '@angular/core';
import { NGLOption } from "./models/ngl-model";
import { SimpleGridData } from "./sample/simple-data";

@Component({
  selector: 'ngl-grid-component',
  templateUrl: './ngl.grid.component.html',
  styleUrls: ['./ngl.grid.component.css']
})
export class NGLGridComponent implements OnInit {
  ngOnInit(): void {

  }
  pages: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  @Input("option")
  gridOptions: NGLOption = new NGLOption(SimpleGridData as NGLOption);
  constructor() {
  }

}
