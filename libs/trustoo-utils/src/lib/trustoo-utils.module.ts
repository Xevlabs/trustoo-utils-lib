import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TranslocoModule } from '@ngneat/transloco';
import { BackNavigationDirective } from './directives/back-navigation/back-navigation.directive';
import { ConfirmationDirective } from './directives/confirmation/confirmation.directive';
import { ResolveCarNameFromInspectionPipe } from './pipes/resolve-car-name-from-inspection/resolve-car-name-from-inspection.pipe';
import { UserNamePipe } from './pipes/user-name/user-name.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        TranslocoModule
    ],
    declarations: [
        LoadingComponent,
        PageNotFoundComponent,
        BackNavigationDirective,
        ConfirmationDirective,
        ResolveCarNameFromInspectionPipe,
        UserNamePipe
    ],
    exports: [
        LoadingComponent,
        PageNotFoundComponent,
        BackNavigationDirective,
        ConfirmationDirective,
        ResolveCarNameFromInspectionPipe,
        UserNamePipe
    ]
})
export class TrustooUtilsModule {
}
