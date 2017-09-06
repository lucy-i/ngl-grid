import { NGLOption, NGLColumn } from "../models/ngl-model";

let simple_data: NGLOption = {
    columns: [
        {
            name: "title",
            title: "Title",
        },
        {
            name: "value",
            title: "Value",
        }
    ] as NGLColumn[],
    data: [
        {
            "title": "MyData",
            "value": "one",
        },
        {
            "title": "MyData",
            "value": "one",
        },
        {
            "title": "MyData",
            "value": "one",
        },
        {
            "title": "MyData",
            "value": "one",
        },

        {
            "title": "MyData",
            "value": "one",
        },
        {
            "title": "MyData",
            "value": "one",
        },
        {
            "title": "MyData",
            "value": "one",
        },

        {
            "title": "MyData",
            "value": "one",
        },

    ]

};
export const SimpleGridData = simple_data;