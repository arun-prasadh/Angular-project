import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.css']
})
export class DataBindingDemoComponent {
  message:string="Message from class";
  isValid:boolean = false;
  image="../assets/sindhu.jpg";
  status:number = 70;
  name:string;
  uemail="guest@acc.com";
  clickHandler=(uname)=>{
    this.name = uname;
   // alert(uname);
   console.log(uname);
  }
}
