import { Component } from '@angular/core';

@Component({
  selector: 'app-starWars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent {
  public id: number = 0;
  public nome: string='';
  public habilidade: string = '';
  public planeta : string = '';
  public armas : string = '';
  public avatar : string = '';


}
