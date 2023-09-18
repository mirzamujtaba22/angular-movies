import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
constructor(){}

@Input() 
maxRating = 5;

@Input()
selectRate=0;
selectedRate= 0;
@Output()
OnRating:EventEmitter<number> =new EventEmitter<number>();
previousRate=0;
maxRatingArr: any[][] | undefined;

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index:number){
this.selectedRate = index + 1;
  }
  handleMouseLeave(index:number){
    if(this.previousRate !==0){
      this.selectedRate = this.previousRate;
    }
    else{
    this.selectedRate = 0;
    }
    
  }
  rate(index:number){
    this.selectRate = index + 1;
    this.previousRate = this.selectedRate;
    this.OnRating.emit(this.selectedRate);
  }


} 
