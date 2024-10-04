import { Pipe, PipeTransform } from '@angular/core';
import { INpmPackage } from '../models';

@Pipe({
  name: 'filterPackages',
  standalone: true,
})
export class FilterPackagesPipe implements PipeTransform {
  transform(packages: INpmPackage[], search: string): INpmPackage[] {
    const searchStringLowerCase = search.toLowerCase();

    return packages.filter(({ id }) =>
      id.toLowerCase().startsWith(searchStringLowerCase)
    );
  }
}
