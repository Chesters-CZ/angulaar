import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'excrept'
})
export class ExcreptPipe implements PipeTransform {

  transform(value: string, times?: number): string {
    let out = "";
    if (times == null) times = 5;
    for (let i = 0; times < i && times < value.length; times++) out = out + value.split("")[i];
    return out + "...";
  }
}
