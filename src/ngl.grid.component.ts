import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { NGLOption, NGLFilterOption, NGLColumn, NGLSort } from "./models/ngl-model";

@Component({
  selector: 'ngl-grid',
  templateUrl: './ngl.grid.component.html',
  styleUrls: ['./ngl.grid.component.css']
})
export class NGLGridComponent implements OnInit, AfterViewInit {
  dataCount: number = 0;
  ngAfterViewInit(): void {
    var dd1 = document.getElementsByClassName("ngl-grid-option");
    for (var index = 0; index < dd1.length; index++) {
      var element = dd1[index];
      element.addEventListener("click", function () {
        this.parentElement.classList.toggle("is-active");
      });
    }

    let d = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }
    var dd2 = document.getElementsByClassName("ngl-filter-option");
    for (var index = 0; index < dd2.length; index++) {
      var element = dd2[index];
      element.addEventListener("click", d);
    }
    var dd3 = document.getElementsByClassName("ngl-filter-value");
    for (var index = 0; index < dd3.length; index++) {
      var element = dd3[index];
      element.addEventListener("click", d);
    }
  }


  get pages(): number[] {
    let ff: number[] = [];
    for (var index: number = 0; index < this.fulllData.length; index++) {
      ff.push(index + 1);
    }
    return ff;
  };

  selectedPage: number = 1;
  @Input("option")
  gridOptions: NGLOption = {} as NGLOption;
  constructor() {
  }

  ngOnInit(): void {


    this.gridOptions.columns.forEach(element => {
      element.filter = new NGLFilterOption();
    });
  }
  public sort(column: NGLColumn) {
    if (column.sort == NGLSort.none) {
      column.sort = NGLSort.asc;
      return;
    }
    if (column.sort == NGLSort.asc) {
      column.sort = NGLSort.desc;
      return;
    }
    if (column.sort == NGLSort.desc) {
      column.sort = NGLSort.none;
      return;
    }
  }

  public setCurrentPage(page: number): void {
    this.selectedPage = page;
  }

  public get fulllData(): any[] {
    let tempResult: any[] = this.gridOptions.data;
    if (this.gridOptions.columns.filter(t => t.filter != undefined && t.filter.value != undefined && t.filter.value != '').length == 0)
      return tempResult.slice(this.selectedPage - 1, (this.selectedPage + 5 - 1)); // <---

    this.gridOptions.columns.filter(t => t.filter.value != undefined && t.filter.value != '').forEach((element: NGLColumn) => {
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
          t[element.name] != (element.filter.value));
      if (element.sort == NGLSort.asc)
        tempResult = tempResult.sort(t => t[element.name]);
      else if (element.sort == NGLSort.desc)
        tempResult = tempResult.sort((a, b) => { return (a[element.name] > b[element.name]) ? 1 : ((b[element.name] > a[element.name]) ? -1 : 0); });
    });
    this.dataCount = tempResult.length;

    return tempResult;
  }

  public get getPageData(): any[] {
    return this.fulllData.slice(this.selectedPage - 1, (this.selectedPage + 5 - 1)); // <----;
  }

}
