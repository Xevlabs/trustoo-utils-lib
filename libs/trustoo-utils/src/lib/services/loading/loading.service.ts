import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loading = false;
    public loading$ = new BehaviorSubject(false);

    set ( loading: boolean) {
        this.loading = loading;
        this.loading$.next(loading);
    }

    get (): Observable<boolean> {
        return this.loading$ as Observable<boolean>;
    }
}
