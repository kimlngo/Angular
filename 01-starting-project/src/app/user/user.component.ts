import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = DUMMY_USERS[this.generateRandomIndex()];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar;
  }

  generateRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.selectedUser = DUMMY_USERS[this.generateRandomIndex()];
  }
}
