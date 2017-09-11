export class NGLColumn {
    name: string;
    type: string;
    pipe: string;
    title: string;
    filter: NGLFilterOption;
}
export class NGLFilterOption {
    filtertype: string;
    value: string;
}

export class NGLOption {
    constructor(option: NGLOption) {
        this.columns = option.columns;
        this.data = option.data;
    }
    selectedPage: number = 1;
    columns: NGLColumn[];
    data: any[];
    // public get getPageData(): any[] {
    //     return this.data.slice(this.selectedPage - 1, (this.selectedPage + 5 - 1)); // <----
    // }
    // public setCurrentPage(page: number): void {
    //     this.selectedPage = page;
    // }
}