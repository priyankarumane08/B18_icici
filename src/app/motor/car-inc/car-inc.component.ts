import { Component } from '@angular/core';

@Component({
  selector: 'app-car-inc',
  templateUrl: './car-inc.component.html',
  styleUrls: ['./car-inc.component.css']
})
export class CarIncComponent {

  public getCarDetails2: any

  
getCarInfo2(){
  console.log("helllo")
  return this.getCarDetails2;
}
}
