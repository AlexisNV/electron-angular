import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Movies',
      icon: 'fas fa-film',
      submenu: [
        {
          title: 'All movies',
          url: '/',
          icon: 'fas fa-eye',
        },
        {
          title: 'Add Movie',
          url: 'add',
          icon: 'fas fa-plus',
        },
      ],
    },
  ];

  constructor() {}
}
