import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../environments/environments';
import { ClassPersonagem } from '../app/class-personagem';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {

  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(): Observable<ClassPersonagem[]>{
    return this._httpClient.get<ClassPersonagem[]>(`${API_PATH}/personagens`)
  }

}
