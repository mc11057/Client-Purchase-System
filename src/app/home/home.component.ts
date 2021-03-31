import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { ApplicationUser } from '../_models/applicationuser';


@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: ApplicationUser[];

    constructor() { }

    ngOnInit() {
        this.loading = false;
    }
}