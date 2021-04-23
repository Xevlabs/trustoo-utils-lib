import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackNavigationService {

    back(): void {
        window.history.back()
    }

}
