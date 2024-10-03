import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingNumbers',
  standalone: true,
})
export class RoundingNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000 && value < 1_000_000) {
      return `${Math.floor(value / 1000)}K`;
    } else if (value >= 1_000_000) {
      return `${Math.floor(value / 1_000_000)}M`;
    } else {
      return `${value}`;
    }
  }
}
