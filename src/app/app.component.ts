import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';
import { INpmPackage } from './models';
import { PackageService } from './services';
import { Subscription } from 'rxjs';
import { ButtonComponent } from './components/button/button.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListComponent, SearchComponent, ButtonComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private packageService: PackageService) {}

  packages: INpmPackage[] = [];
  dependencies: string[] = [];
  search: string = '';
  isLoading = false;

  private subscribePackages!: Subscription;
  private subscribeDependencies!: Subscription;

  handleHover(id: string) {
    this.subscribeDependencies = this.packageService
      .getDependencies(id)
      .subscribe((dependencies) => (this.dependencies = dependencies));
  }

  handleNotHover() {
    this.dependencies = [];
  }

  handleClick() {
    this.loadPackages();
  }

  handleChange(search: string) {
    this.search = search;
  }

  loadPackages() {
    this.isLoading = true;
    this.subscribePackages = this.packageService
      .getPackages()
      .subscribe((packages) => {
        this.isLoading = false;
        this.packages = packages;
      });
  }

  ngOnInit(): void {
    this.loadPackages();
  }

  ngOnDestroy() {
    this.subscribePackages.unsubscribe();
    this.subscribeDependencies.unsubscribe();
  }
}
