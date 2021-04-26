import { TestBed } from '@angular/core/testing';

import { BackNavigationDirective } from './back-navigation.directive';
import { BackNavigationService } from '../../services/back-navigation/back-navigation.service';

describe('BackNavigationDirective', () => {
    let navService;

    beforeEach(() => {
        TestBed.configureTestingModule({
        });
        navService = TestBed.inject(BackNavigationService);
    });

    it('should create an instance', () => {
        const directive = new BackNavigationDirective(navService);
        expect(directive).toBeTruthy();
    });
});
