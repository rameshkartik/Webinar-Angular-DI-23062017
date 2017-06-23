import { Component,Inject } from '@angular/core';

@Component(
    {
        selector: 'timezone-ui',
        template: 'TimeZone: {{api}} <br/>',
        providers: [
            { provide: 'apiData', useValue: 'http://api.timzonedb.com/v2/list-time-zone?key=F1GX4UOT5XZR&format=json&country=IN' }
        ]
    })
export class TimeZoneComponent {
    api: string;

    constructor( @Inject('apiData') api_Data) {
        this.api = api_Data;
    }
}