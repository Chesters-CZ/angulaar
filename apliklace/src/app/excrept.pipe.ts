import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'excrept'
})
export class ExcreptPipe implements PipeTransform {

  transform(value: string): string {
    let out = "";
    for (let i = 0; i < 6; i++) {
      out = out + value.split("")[i];
    }
    return out;
  }
}
