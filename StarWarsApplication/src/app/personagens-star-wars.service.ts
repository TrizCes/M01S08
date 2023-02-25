import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../environments/environments';
import { CPersonagem } from './c-personagem';

@Injectable({
  providedIn: 'root'
})

export class PersonagensStarWarsService {

  constructor(private _httpClient: HttpClient) { }

  public getPersonagens(){
    return this._httpClient.get<CPersonagem[]>(`${API_PATH}`)
  }

}
