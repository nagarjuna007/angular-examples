import { Component } from '@angular/core';

@Component({
  selector: 'my-ngifngfor',
  templateUrl: './ngifngfor.component.html'
})
export class NgifngforComponent  {
  showSecret=false;
  showSecret1=false;
  log=[];
  
  onToggleDetails(){
    this.showSecret1=!this.showSecret1;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }
}
