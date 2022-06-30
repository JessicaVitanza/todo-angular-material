import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityString'
})
export class PriorityStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
