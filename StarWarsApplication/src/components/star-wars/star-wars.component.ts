import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ClassPersonagem } from 'src/app/class-personagem';
import { PersonagensStarWarsService } from 'src/service/personagens-sw.service'
=======
import { CPersonagem } from 'src/app/c-personagem';
import { PersonagensStarWarsService } from 'src/app/personagens-star-wars.service';
>>>>>>> 9c0a0013d9a9e780762b81551ab3ab26a17d8c81

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {
<<<<<<< HEAD
  public personagens: ClassPersonagem[]=[];
=======

  public personagens: CPersonagem[] = [];

 constructor(private _service: PersonagensStarWarsService){}

 ngOnInit(): void {
  this._service.getPersonagens().subscribe((res)=>{this.personagens = res})
 }
 public getPersonagensFromService(){

 }
>>>>>>> 9c0a0013d9a9e780762b81551ab3ab26a17d8c81

  constructor(private  _service: PersonagensStarWarsService){}

  ngOnInit(): void {
    this._service.getPersonagens().subscribe((res)=>{this.personagens = res})
  }
  public getPersonagensFromService(){

  }
}
