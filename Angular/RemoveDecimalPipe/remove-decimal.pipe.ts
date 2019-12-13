import { Injectable, PipeTransform, Pipe } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Pipe({name: 'removeDecimal'})
export class RemoveDecimalPipe implements PipeTransform {

  constructor() { }

  transform(value: number): number {
    return Number(value);
  }
}
