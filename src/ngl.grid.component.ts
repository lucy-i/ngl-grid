import { Component, Input, OnInit } from '@angular/core';
import { NGLOption, NGLFilterOption } from "./models/ngl-model";

@Component({
  selector: 'ngl-grid',
  templateUrl: './ngl.grid.component.html',
  styleUrls: ['./ngl.grid.component.css']
})
export class NGLGridComponent implements OnInit {

  @Input("option")
  gridOptions: NGLOption;
  constructor() {
  }

  ngOnInit(): void {
    this.gridOptions.columns.forEach(element => {
      element.filter = new NGLFilterOption();
    });
  }

  public get getData(): any[] {
    let tempResult: any[] = this.gridOptions.data;
    if (this.gridOptions.columns.filter(t => t.filter != undefined && t.filter.value != undefined && t.filter.value != '').length == 0)
      return tempResult;

    this.gridOptions.columns.filter(t => t.filter.value != undefined && t.filter.value != '').forEach(element => {
      if (element.filter.filtertype == "equals")
        tempResult = tempResult.filter(t =>
          t[element.name] == element.filter.value
        );
      if (element.filter.filtertype == "startswith")
        tempResult = tempResult.filter(t =>
          t[element.name].indexOf(element.filter.value) == 0
        );
      if (element.filter.filtertype == "contains")
        tempResult = tempResult.filter(t =>
          t[element.name].indexOf(element.filter.value) >= 0
        );
      if (element.filter.filtertype == "notcontains")
        tempResult = tempResult.filter(t =>
          t[element.name].indexOf(element.filter.value) == -1
        );
      if (element.filter.filtertype == "notequals")
        tempResult = tempResult.filter(t =>
          t[element.name]!=(element.filter.value));
    });
    return tempResult;
  }

}
