import { Component } from '@angular/core';

@Component({
  selector: 'my-ngifngfor',
  templateUrl: './ngifngfor.component.html'
})
export class NgifngforComponent  {
  showSecret=false;
  showSecret1=false;
  log=[];
  evenNumbers=[2,4,6,8,10];
  oddNumbers=[1,3,5,7,9];
  value=5;

  onToggleDetails(){
    this.showSecret1=!this.showSecret1;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
