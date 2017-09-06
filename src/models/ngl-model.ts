export class NGLColumn {
    name: string;
    type: string;
    pipe: string;
    title: string;
    filter: NGLFilterOption;
}
export class NGLFilterOption {
    filtertype: number;
    value: string;
}

export class NGLOption {
    columns: NGLColumn[];
    data: any[];
}