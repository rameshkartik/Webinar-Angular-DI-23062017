import { Allowance } from '../Model/Allowance';
import { Salary } from '../Model/Salary';
import { PersonalDetails } from '../Model/PersonalDetails';
import { Inject } from '@angular/core';

export class ContractEmployee {

    public Allowance_Obj: Allowance;
    public Salary_Obj: Salary;
    public PersonalDet_Obj: PersonalDetails;

    constructor(@Inject(Allowance) AllowanceObj,
        @Inject(Salary) SalaryObj,
        @Inject(PersonalDetails) PersonalDetObj) {

        this.Allowance_Obj = AllowanceObj;
        this.Salary_Obj = SalaryObj;
        this.PersonalDet_Obj = PersonalDetObj;
    }
    private EmployeeCode: number = 4050;
    private EmployeeName: string = "Rameshkartik";


    public getEmployeeCode(): number {
        return this.EmployeeCode;
    }

    public getEmployeeName(): string {
        return this.EmployeeName;
    }
}