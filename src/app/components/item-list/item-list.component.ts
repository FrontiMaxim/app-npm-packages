import { Component, Input } from '@angular/core';
import { RoundingNumberPipe, TransformDependencyPipe } from '../../pipes';
import { NgClass } from '@angular/common';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [RoundingNumberPipe, TransformDependencyPipe, NgClass, SvgIconComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss',
})
export class ItemListComponent {
  @Input() id = '';
  @Input() weeklyDownloads = 0;
  @Input() dependencyCount = 0;
  @Input() isActive = false;
}
