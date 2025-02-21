import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {
    private API_URL = `https://api.rawg.io/api/games?key=5900c10a27ce40ceb58ec91b6a24e6f4`;

    constructor(private http: HttpClient) {}

    getJuegos(): Observable<any> {
        return this.http.get<any>(this.API_URL).pipe(
        catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('Error en la API:', error);
        return throwError(() => new Error('Error al obtener los juegos. Intenta nuevamente más tarde.'));
    }
}