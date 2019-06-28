import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  model = new User();

  constructor() { }

  ngOnInit() {
  }

  logUser(userf) {
    console.log(userf);
 }
}
