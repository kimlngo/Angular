import { Component, computed, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[this.generateRandomIndex()]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  generateRandomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.selectedUser.set(DUMMY_USERS[this.generateRandomIndex()]);
  }
}
