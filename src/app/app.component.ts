import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { INpmPackage } from './models';
import { PackageService } from './services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private packageService: PackageService) {}

  packages$!: Observable<INpmPackage[]>;
  search: string = '';

  handleHover(id: string) {
    // this.packageService.getDependencies(id).subscribe((dependencies) => {
    //   this.packages = this.packages.map(item => ({
    //     ...item,
    //     isActive: dependencies.includes(item.id)
    //   }))
    // });
  }

  handleChange(search: string) {
    this.search = search;
  }

  ngOnInit(): void {
    this.packages$ = this.packageService.getPackages();
  }

  ngOnDestroy() {
    // Тут отписываемся
  }
}
