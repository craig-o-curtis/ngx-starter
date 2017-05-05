import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pluralize'
})
export class PluralizePipe implements PipeTransform {
  transform(word: string, total?: any): any {
    return total !== 1 ? `${word}s` : `${word}`;
  }
}
