import { Employee } from '../Model/Employee';
import { HigherLevelEmployee } from '../Model/Employee';
import { Injectable } from '@angular/core'

@Injectable()
export class FactoryEmployee {
    public Create(TypeOfEmployee): Employee {

        if (TypeOfEmployee == "Employee") {
            return new Employee();
        }
        else {
            return new HigherLevelEmployee();
        }
    }
    
}