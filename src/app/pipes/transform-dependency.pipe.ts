import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformDependency',
  standalone: true
})
export class TransformDependencyPipe implements PipeTransform {

  transform(value: number): string {
    return `${value} ${value === 1 ? 'dependency' : 'dependencies'}`;
  }

}
