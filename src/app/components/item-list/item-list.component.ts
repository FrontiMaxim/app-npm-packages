import { Component, Input} from '@angular/core';
import { RoundingNumberPipe } from '../../pipes/rounding-number.pipe';
import { TransformDependencyPipe } from '../../pipes/transform-dependency.pipe';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [RoundingNumberPipe, TransformDependencyPipe],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  @Input() id = '';
  @Input() weeklyDownloads = 0;
  @Input() dependencyCount = 0;
  @Input() isActive = false;
}
