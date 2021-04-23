import { AfterViewInit, Component, Input } from '@angular/core';
import { delay } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'trustoo-utils-lib-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements AfterViewInit {
  @Input() loadingService: any;
  isLoading = false;

  ngAfterViewInit(): void {
    if (this.loadingService) {
      this.loadingService.get().pipe(delay(0), untilDestroyed(this)).subscribe((loading: boolean) => {
        this.isLoading = loading
      })
    }
  }

}
