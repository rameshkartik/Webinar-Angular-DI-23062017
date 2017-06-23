import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';
import { EmployeeComponent } from './EmployeeComponent';

@Component(
    {
        selector: "grid-ui",
        templateUrl: "Grid.html"
    }
)
export class GridComponent {


    gridData: Array<Object> = new Array<Object>();
    gridColumns: Array<Object> = new Array<Object>();

    @Input("grid-Data")
    set gridDataSet(_gridData: Array<Object>) {

        if (_gridData.length > 0) {

            var cols = Object.keys(_gridData[0]);
            this.gridColumns = new Array<Object>();
            for (var index in cols) {
                this.gridColumns.push(cols[index]);
            }
        }

        this.gridData = _gridData;
    }

    @Output("grid-output")
    selected: EventEmitter<Object> = new EventEmitter<Object>();

    @Input("grid-entity")
    EntityName: string = "";

    Select(_sel: Object) {
        this.selected.emit(_sel);
    }
}