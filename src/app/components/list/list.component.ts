import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemListComponent } from '../item-list/item-list.component';
import { INpmPackage } from '../../models';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FilterPackagesPipe } from '../../pipes/filter-packages.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemListComponent, NgFor, NgIf, FilterPackagesPipe, AsyncPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent {
  @Output() onHover = new EventEmitter<string>();

  @Input() packages$!: Observable<INpmPackage[]>;
  @Input() search: string = '';


  handleHover(event: MouseEvent) {
    const element = event.target as Element;
    this.onHover.emit(element.getAttribute('ng-reflect-id') ?? '');
  }
}
