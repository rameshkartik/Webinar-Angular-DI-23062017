import { Component, Inject } from '@angular/core';

@Component({
    selector: 'random-ui',
    template: `Random: {{ value }} <br/>`
})
export class RandomComponent {
    value: number;

    constructor( @Inject('Random') r) {
        this.value = r;
    }
}
