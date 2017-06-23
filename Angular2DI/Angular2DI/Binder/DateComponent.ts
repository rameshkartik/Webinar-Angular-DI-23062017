import { Component, Inject } from '@angular/core';
import { DateWidget } from '../Service/DateWidget';

@Component(
    {
        providers: [DateWidget],
        selector: 'date-ui',
        template: `Today Date: {{ dateToday }} <br/>`
    }
)
export class DateComponent {

    dateToday: string;

    _dateWidget: DateWidget;

    
    constructor(private dateWidget: DateWidget) {
        this._dateWidget = dateWidget;
        this.dateToday = this._dateWidget.getDate();
    }
}