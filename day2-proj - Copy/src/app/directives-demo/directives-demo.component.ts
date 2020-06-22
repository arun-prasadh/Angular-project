import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrls: ['./directives-demo.component.css']
})
export class DirectivesDemoComponent  {

  style={
    color:"white",
    backgroundColor:"navy",
    fontSize:'1.5em'
  }
  status:boolean = true;
  names: string[] = ["aaa","bbb", "ccc", "ddd"];
  users = [
    {
      uname:"abc",
      country:"USA",
      description:"some sample discussion 1",
      skills:["angular","react","bootstrap"]
    },
    {
      uname:"xyz",
      country:"India",
      description:"some sample discussion 2",
      skills:["angular","html","css","jquery"]
    },
    {
      uname:"pqr",
      country:"Japan",
      description:"some sample discussion 3",
      skills:["java","angular"]
    },
    {
      uname:"sindhu",
      country:"Japan",
      description:"some sample discussion 3",
      skills:["java","angular"]
    }
  ]
  toggleStatus(){
    this.status = ! this.status;
  }
}
