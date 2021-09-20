import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'missionDate'
})
export class MissionDatePipe implements PipeTransform {

  transform(value: Date | string, ...args: unknown[]): Date {
      if (typeof value === 'string') {
          return new Date((value as string).split(' ')[0].split('-').join('/'));
      }
      return value
  }

}
