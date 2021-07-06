import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  fakeData=[
    {
      name:'yeferson',
      lastname:'castiblanco',
      email:'ycasti@gmail.com',
      startDate:'2021-07-05'
    },
    {
      name:'paola',
      lastname:'castiblanco',
      email:'pcasti@gmail.com',
      startDate:'2021-07-11'
    },
    {
      name:'yeferson',
      lastname:'castiblanco',
      email:'ycasti@gmail.com',
      startDate:'2021-07-05'
    },
    {
      name:'yeferson',
      lastname:'castiblanco',
      email:'ycasti@gmail.com',
      startDate:'2021-07-05'
    },
    {
      name:'yeferson',
      lastname:'castiblanco',
      email:'ycasti@gmail.com',
      startDate:'2021-07-05'
    }
    
  ]

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onGoToEdit(row: any): void {
    this.navigationExtras.state!.value = row;

    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(row: any): void {
    this.navigationExtras.state!.value = row;

    this.router.navigate(['details'], this.navigationExtras);
  }

  onGoToDelete(row: any): void {
    alert('deleted successfully');
  }
}
