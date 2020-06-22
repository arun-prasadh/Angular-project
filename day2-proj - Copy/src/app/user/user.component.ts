import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  // Use @Input to receive data from parent component
  // @Input should have parent attribute name as argument, if there is a mismatch with class property name
  @Input('uname') 
  username:string="unknown";
  // Here the parent template attribute name and class property name is same so argument to @Input is optional
  @Input()
  country:string="unknown country";
  @Input() url="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbezqZpEuwGSvitKy3wrwnth5kysKdRqBW54cAszm_wiutku3R";
  @Input() description = "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem dui, tempor sit amet commodo a, vulputate vel tellus."
  @Input()
  skills:string="default skill";
}
