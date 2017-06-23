import { ReflectiveInjector,Component } from '@angular/core';
import { Allowance } from '../Model/Allowance';
import { Salary } from '../Model/Salary';
import { PersonalDetails } from '../Model/PersonalDetails';
import { ContractEmployee } from '../Model/ContractEmployee';

//var injector = ReflectiveInjector.resolveAndCreate([
//    ContractEmployee,
//    Allowance,
//    Salary,
//    PersonalDetails]);

var injector = ReflectiveInjector.resolveAndCreate([
    { provide: ContractEmployee, useClass: ContractEmployee },
    { provide: Allowance, useClass: Allowance },
    { provide: Salary, useClass: Salary },
    { provide: PersonalDetails, useClass: PersonalDetails }]);
@Component(
    {
        selector: 'ContractEmployee-ui',
        template: '<div>' +
        'EmployeeName : {{ Name }} <br/> ' +
        'EmployeeCode:  {{EmpCode }} <br/> ' +
        'SalaryAccountType:  {{SalaryAccType }} <br/> ' +
        'AccountNumber:  {{SalaryAccNumber }} <br/> ' +
        'Salary:  {{SalaryAmount }} <br/> ' +
        'HRA:  {{HRA }} <br/> ' +
        'TravelAllowance:  {{TravelAllowance }} <br/> ' +
        'MobileAllowance:  {{MobileAllowance }} <br/> ' +
        'City:  {{City }} <br/> ' +
        'Age:  {{Age }} <br/> ' +
        'BloodGroup:  {{BloodGroup }} <br/> ' +
            '</div> '
        
    }
)
export class ContractEmployeeComponent {
    contractEmpObj: ContractEmployee;
    Name: string = "";
    EmpCode: number = 0;

    SalaryAccType: string = "";
    SalaryAccNumber: number = 0;
    SalaryAmount: number = 0;

    HRA: number = 0;
    TravelAllowance: number = 0;
    MobileAllowance: number = 0;

    City: string = "";
    Age: number = 0;
    BloodGroup: string = "";
    

    constructor() {
        this.contractEmpObj = injector.get(ContractEmployee);
        this.Name = this.contractEmpObj.getEmployeeName();
        this.EmpCode = this.contractEmpObj.getEmployeeCode();

        this.SalaryAccType = this.contractEmpObj.Salary_Obj.getSalaryAccountType();
        this.SalaryAccNumber = this.contractEmpObj.Salary_Obj.getSalaryAccountNumber();
        this.SalaryAmount = this.contractEmpObj.Salary_Obj.getSalary();

        this.HRA = this.contractEmpObj.Allowance_Obj.getHRA();
        this.TravelAllowance = this.contractEmpObj.Allowance_Obj.getTravelAllowance();
        this.MobileAllowance = this.contractEmpObj.Allowance_Obj.getMobileBillAllowance();

        this.City = this.contractEmpObj.PersonalDet_Obj.getCity();
        this.Age = this.contractEmpObj.PersonalDet_Obj.getAge();
        this.BloodGroup = this.contractEmpObj.PersonalDet_Obj.getBloodGroup();
        
    }
}