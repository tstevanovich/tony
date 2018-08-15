import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!value || value === undefined || value.length === 0) {
      return null;
    } else {
      return value.sort((a, b) => (a[args] > b[args] ? 1 : -1));
    }
  }
}
