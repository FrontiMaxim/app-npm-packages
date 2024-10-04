import { Pipe, PipeTransform } from '@angular/core';
import { INpmPackage } from '../models';

@Pipe({
  name: 'setIsActive',
  standalone: true,
})
export class SetIsActivePipe implements PipeTransform {
  transform(packages: INpmPackage[], dependencies: string[]): INpmPackage[] {
    return packages.map((item) => ({
      ...item,
      isActive: dependencies.includes(item.id),
    }));
  }
}
