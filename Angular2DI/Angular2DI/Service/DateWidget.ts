import { Injectable } from '@angular/core'

@Injectable()
export class DateWidget {

    Dat: Date = new Date();

    public getDate(): string {
        return this.Dat.toDateString();
    }
}