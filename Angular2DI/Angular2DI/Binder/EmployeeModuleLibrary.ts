import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../Binder/EmployeeComponent';
import { GridComponent } from './GridComponent';
import { RandomComponent } from './RandomComponent';
import { DateComponent } from './DateComponent';
import { ContractEmployeeComponent } from './ContractEmployeeComponent';
import { TimeZoneComponent } from './TimeZoneComponent';

//const randomFactory = () => { return Math.random(); };

@NgModule(
    {
        imports: [BrowserModule, FormsModule],
        declarations: [EmployeeComponent, GridComponent,
            RandomComponent, DateComponent,ContractEmployeeComponent,TimeZoneComponent],
        providers: [
            { provide: 'Random', useValue: Math.random() },
            { provide: 'apiData', useValue: 'http://api.timezonedb.com/v2/list-time-zone?key=F1GX4UOT5XZR&format=json&country=IN' }
        ],
        bootstrap: [EmployeeComponent]
    })
export class EmployeeModuleLibrary {
}