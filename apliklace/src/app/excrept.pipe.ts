import {Pipe, PipeTransform} from '@angular/core';
import {split} from "ts-node";

@Pipe({
  name: 'excrept'
})
export class ExcreptPipe implements PipeTransform {

  transform(value: string, times: number = 5, ending: string = "..."): string {
    return value.substring(0, times) + ending;
  }
}
