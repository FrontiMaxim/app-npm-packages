import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { INpmPackage } from '../models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackageService {
  constructor(private http: HttpClient) {}

  getPackages() {
    return this.http.get<INpmPackage[]>(`${environment.apiUrl}`).pipe(
      map((packages) =>
        packages.map((item) => ({
          ...item,
          isActive: false,
        }))
      )
    );
  }

  getDependencies(id: string) {
    this.http.get<string[]>(`${environment.apiUrl}/${id}/dependencies`);
  }
}
