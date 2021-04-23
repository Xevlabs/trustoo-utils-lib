import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[trustooUtilsLibConfirmation]'
})
export class ConfirmationDirective {
    @Input() isActive = true;
    @Input() isActiveTrigger = false;
    @Input() message: string;
    @Output() confirmation = new EventEmitter<boolean>();

    @HostListener('click', ['$event']) onClick($event) {
        $event.stopPropagation();
        if (this.isActive) {
            const isConfirm = window.confirm(this.message);
            isConfirm ? this.confirmation.emit(true) : this.confirmation.emit(false);
            return;
        }
        if (this.isActiveTrigger) {
            const isConfirm = window.confirm(this.message);
            isConfirm ? this.confirmation.emit(true) : this.confirmation.emit(false);
            return;
        }
        else {
            this.confirmation.emit(true)
        }
    }

}
