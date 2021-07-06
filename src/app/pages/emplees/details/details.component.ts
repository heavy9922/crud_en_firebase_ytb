import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.interface';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  employee:Employee

  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };

  constructor(private router:Router ,private employeesSvc:EmployeesService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      if(typeof this.employee === 'undefined'){
        //rediregir
        this.router.navigate(['/list'])
      }
    },1000)
  }

  onGoToEdit(): void {
    this.navigationExtras.state!.value = this.employee;
    this.router.navigate(['edit'], this.navigationExtras);
  }
  
  async onGoToDelete(): Promise<void> {
    let id:any = this.employee.id
    try{
      await this.employeesSvc.onDelete(id)
      alert('deleted succesfully')
      this.router.navigate(['/list'])
    }catch(err){
      console.error(err)
    }
  }
}
