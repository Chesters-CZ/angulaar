import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {isNumeric} from 'rxjs/internal-compatibility';

@Directive({
  selector: '[appMax]',
  providers: [{provide: NG_VALIDATORS, useExisting: MaxDirective, multi: true}]
})
export class MaxDirective implements Validator {

  el: HTMLElement;
  pMin = 0;

  constructor(
    el: ElementRef<HTMLElement>
  ) {
    this.el = el.nativeElement;
  }

  @Input('appMax')
  set min(value: number) {
    this.el.setAttribute('max', '' + value);
    this.pMin = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (isNumeric(value) && value > this.pMin) {
      return {max: this.pMin};
    }
    return null;
  }

}
