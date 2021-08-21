import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TranslocoModule } from '@ngneat/transloco';
import { ConfirmationDirective } from './directives/confirmation/confirmation.directive';
import { ResolveCarNameFromInspectionPipe } from './pipes/resolve-car-name-from-inspection/resolve-car-name-from-inspection.pipe';
import { UserNamePipe } from './pipes/user-name/user-name.pipe';
import { MissionDatePipe } from './pipes/mission-date-pipe/mission-date.pipe';

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
        ConfirmationDirective,
        ResolveCarNameFromInspectionPipe,
        UserNamePipe,
        MissionDatePipe
    ],
    exports: [
        LoadingComponent,
        PageNotFoundComponent,
        ConfirmationDirective,
        ResolveCarNameFromInspectionPipe,
        UserNamePipe,
        MissionDatePipe
    ]
})
export class TrustooUtilsModule {
}
