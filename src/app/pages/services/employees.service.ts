import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from 'src/app/shared/models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  employees?: Observable<Employee[]>;
  private employeeCollection!: AngularFirestoreCollection<Employee>;

  constructor(private readonly afs:AngularFirestore) {
    this.employeeCollection = afs.collection<Employee>('employees')
    this.getonEmployees();
  }

  onDelete(empId:string): Promise<void> {
    return new Promise(async (resolve,reject)=>{
      try{
        const result = this.employeeCollection.doc(empId).delete();
        resolve(result)
      }catch (error){
        reject(error.message)
      }
    })
  }

  onSaveSvc(employee:Employee, empId:string):Promise<void>{
    return new Promise(async (resolve,reject)=>{
      try{
        const id = empId || this.afs.createId();
        const data = {id, ...employee};
        const result = this.employeeCollection.doc(id).set(data)
        resolve(result)
      }catch (error){
        reject(error.message)
      }
    })
  }

  private getonEmployees():void{
    this.employees = this.employeeCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as Employee))
    )
  }
}
