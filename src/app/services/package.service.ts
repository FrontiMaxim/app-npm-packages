import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { INpmPackage } from '../models';
import { catchError, map, throwError } from 'rxjs';

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
    return this.http.get<string[]>(`${environment.apiUrl}/${id}/dependencies`).pipe(catchError(this.handleError));
  }

  handleError(_: HttpErrorResponse) {
    return throwError(() => 'Не удалось получить зависимости по пакету...'); 
  }
}
