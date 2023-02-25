import { Component, OnInit } from '@angular/core';
import { ClassPersonagem } from 'src/app/class-personagem';
import { PersonagensStarWarsService } from 'src/service/personagens-sw.service'

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit {
  public personagens: ClassPersonagem[]=[];

  constructor(private  _service: PersonagensStarWarsService){}

  ngOnInit(): void {
    this._service.getPersonagens().subscribe((res)=>{this.personagens = res})
  }

}
