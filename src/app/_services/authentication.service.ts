import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import { environment } from '../../environments/environment'
import { ApplicationUser } from '../_models/applicationuser';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')!));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/login`, {username, password }, {observe: 'response'})
            .pipe(map(response => {
                if(response.headers.get('Authorization') != null)
                {   
                    // store jwt token in local storage to add the token in the next requests              
                    localStorage.setItem('token', JSON.stringify(response.headers.get('Authorization')));
                }
              

            }),mergeMap(()=> this.getUser(username)));
    }
    getUser(username: string) {
        return this.http.post<ApplicationUser>(`${environment.apiUrl}/user/loadUserByUserName`, username )
            .pipe(map(user => {
                // store user  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;  
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}