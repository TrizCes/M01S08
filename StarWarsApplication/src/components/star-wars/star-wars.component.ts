import { Component, OnInit } from '@angular/core';
import { CPersonagem } from 'src/app/c-personagem';
import { PersonagensStarWarsService } from 'src/app/personagens-star-wars.service';

@Component({
  selector: 'app-starWars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {

  public personagens: CPersonagem[] = [];

 constructor(private _service: PersonagensStarWarsService){}

 ngOnInit(): void {
  this._service.getPersonagens().subscribe((res)=>{this.personagens = res})
 }
 public getPersonagensFromService(){

 }


}
