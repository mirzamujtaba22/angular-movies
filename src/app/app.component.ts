import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit():void{
    this.moviesIntheaters=[{
      title:'Spider-Man',
  releaseDate:new Date(),
  price:1400.99
},
{
  title:'Moana',
  releaseDate:new Date('2019-11-12'),
  price:400
      
    },
    {
      title:'Spider-Man',
  releaseDate:new Date(),
  price:1400.99
},
{
  title:'Moana',
  releaseDate:new Date('2019-11-12'),
  price:400
      
    },
    {
      title:'Spider-Man',
  releaseDate:new Date(),
  price:1400.99
},
{
  title:'Moana',
  releaseDate:new Date('2019-11-12'),
  price:400
      
    },
    {
      title:'Spider-Man',
  releaseDate:new Date(),
  price:1400.99
},
{
  title:'Moana',
  releaseDate:new Date('2019-11-12'),
  price:400
      
    }];
    this.moviesFutureReleases = [];
  }

 moviesIntheaters: { title: string; releaseDate: Date; price: number; }[] | undefined;
 moviesFutureReleases: any;
  title = 'angular-movies';

 duplicateNumber(n:number){
  return n*2;
 }

 handleRating(rate: number){
  alert(`The user selected ${rate}`);
 }
}
