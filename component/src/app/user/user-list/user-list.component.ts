import { User } from './../user';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userList: User[] = [
    {
      name: 'Elvis THOMME',
      jop: 'Solftwar Ingenieur',
      company: 'shlife',
      about: 'I am a pationate of IT',
      image:
        'https://avatars.githubusercontent.com/u/68167828?s=400&u=3288552f61560e81f9cbbc86db903bec716835fd&v=4',
    },
    {
      name: 'Elvis THOMME',
      jop: 'Solftwar Ingenieur',
      company: 'shlife',
      about: 'I am a pationate of IT',
      image:
        'https://avatars.githubusercontent.com/u/68167828?s=400&u=3288552f61560e81f9cbbc86db903bec716835fd&v=4',
    },
    {
      name: 'Elvis THOMME',
      jop: 'Solftwar Ingenieur',
      company: 'shlife',
      about: 'I am a pationate of IT',
      image:
        'https://avatars.githubusercontent.com/u/68167828?s=400&u=3288552f61560e81f9cbbc86db903bec716835fd&v=4',
    },
    {
      name: 'Elvis THOMME',
      jop: 'Solftwar Ingenieur',
      company: 'shlife',
      about: 'I am a pationate of IT',
      image:
        'https://avatars.githubusercontent.com/u/68167828?s=400&u=3288552f61560e81f9cbbc86db903bec716835fd&v=4',
    },
    {
      name: 'Elvis THOMME',
      jop: 'Solftwar Ingenieur',
      company: 'shlife',
      about: 'I am a pationate of IT',
      image:
        'https://avatars.githubusercontent.com/u/68167828?s=400&u=3288552f61560e81f9cbbc86db903bec716835fd&v=4',
    },
  ];
}
