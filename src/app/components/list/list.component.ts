import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { INpmPackage } from '../../models';
import { NgFor } from '@angular/common';
import { FilterPackagesPipe, SetIsActivePipe } from '../../pipes';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ItemListComponent,
    NgFor,
    FilterPackagesPipe,
    SetIsActivePipe,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Output() onHover = new EventEmitter<string>();
  @Output() onNotHover = new EventEmitter<void>();

  @Input() packages: INpmPackage[] = [];
  @Input() dependencies: string[] = [];
  @Input() search: string = '';

  handleHover(event: MouseEvent) {
    const element = event.target as Element;
    this.onHover.emit(element.getAttribute('ng-reflect-id') ?? '');
  }

  handleNotHover(event: MouseEvent) {
    const element = event.target as Element; 

    element.getAttribute('ng-reflect-id') && this.onNotHover.emit();
  }
}
