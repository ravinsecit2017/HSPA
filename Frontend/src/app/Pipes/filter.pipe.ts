import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {

    const resutlArray = [];
    if (value.length === 0 || filterString === '' || propName === '') {
      return value;
    }

    for (const item of value) {
      if (item[propName] === filterString) {
        resutlArray.push(item);
      }
    }
    return resutlArray;
  }

}
