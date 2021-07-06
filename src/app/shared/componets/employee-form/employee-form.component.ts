import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../../models/employee.interface';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {

  employee:Employee 
  employeeForm!: FormGroup;
  private isEmail = '/\S+@\S+\.\S+/';

  constructor(private router:Router, private fb:FormBuilder) { 
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value;
    this.initForm();
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      //rediregir
      this.router.navigate(['/new'])
    }else{
      this.employeeForm.patchValue(this.employee);
    }
  }
  
  onsave():void{
    console.log('updated', this.employeeForm.value )
  }
  goToList(){
    this.router.navigate(['/list'])
  }
  private initForm(){
    this.employeeForm = this.fb.group({
      name:['', [Validators.required]],
      lastname:['', [Validators.required]],
      email:['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate:['', [Validators.required]],
    });
  }

}
