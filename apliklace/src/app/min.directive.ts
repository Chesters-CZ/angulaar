import {Directive, ElementRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {isNumeric} from 'rxjs/internal-compatibility';

@Directive({
  selector: '[appMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDirective, multi: true}]
})
export class MinDirective implements Validator {

  el: HTMLElement;
  pMin = 0;

  constructor(
    el: ElementRef<HTMLElement>
  ) {
    this.el = el.nativeElement;
  }

  @Input('appMin')
  set min(value: number) {
    this.el.setAttribute('min', '' + value);
    this.pMin = value;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (isNumeric(value) && value < this.pMin) {
      return {min: this.pMin};
    }
    return null;
  }

}
