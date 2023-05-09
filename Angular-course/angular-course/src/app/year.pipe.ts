import { Pipe, PipeTransform } from '@angular/core';


// Pipe - Transformer of data, can be used like {{ object | pipe }} to transform the output data according to given function,
// created by ng g pipe $name
@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().substring(2, )
  }

}
