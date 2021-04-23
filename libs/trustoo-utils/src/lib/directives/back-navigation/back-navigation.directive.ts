import { Directive, HostListener } from '@angular/core';
import { BackNavigationService } from '../../services/back-navigation/back-navigation.service';

@Directive({
  selector: '[trustooUtilsLibBackNavigation]'
})
export class BackNavigationDirective {

    constructor(private backNavigation: BackNavigationService) { }

    @HostListener('click') onClick(){
        this.backNavigation.back()
    }

}
