import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  
  employeeXD = this.employeesSvc.employees;

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  constructor(private router: Router,private employeesSvc:EmployeesService) {}

  ngOnInit(): void {}

  onGoToEdit(row: any): void {
    this.navigationExtras.state!.value = row;

    this.router.navigate(['edit'], this.navigationExtras);
  }

  onGoToSee(row: any): void {
    this.navigationExtras.state!.value = row;
    this.router.navigate(['details'], this.navigationExtras);
  }

  async onGoToDelete(empId:any): Promise<void> {
    try{
      await this.employeesSvc.onDelete(empId)
      alert('deleted succesfully')
    }catch(err){
      console.error(err)
    }
  }
}
