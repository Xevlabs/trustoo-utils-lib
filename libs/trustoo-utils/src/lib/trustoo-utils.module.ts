import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { LoadingComponent } from './components/loading/loading.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TranslocoModule } from '@ngneat/transloco';
import { TRANSLOCO_PROVIDER } from './configs/transloco.config';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        TranslocoModule
    ],
    providers: [
        TRANSLOCO_PROVIDER
    ],
    declarations: [
        LoadingComponent,
        PageNotFoundComponent
    ],
})
export class TrustooUtilsModule {
}
