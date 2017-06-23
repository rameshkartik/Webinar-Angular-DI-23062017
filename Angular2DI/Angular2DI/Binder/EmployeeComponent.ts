import { Component } from '@angular/core';
import { Employee } from '../Model/Employee';
import { FactoryEmployee } from '../Service/FactoryEmployee';
@Component(
    {
        providers: [FactoryEmployee],
        selector: "Employee-ui",
        templateUrl: "Employee.html"
    }
)
export class EmployeeComponent {

    public EmployeeCurrentObj: Employee =  null;

    public _EmployeeType: string = "";

    public Employees: Array<Employee> = new Array<Employee>();

    factoryEmployeeObject: FactoryEmployee = null;

    OnEmployeeTypeChange(EmployeeType) {

        this._EmployeeType = EmployeeType;
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
    }

    constructor(factoryEmpObject: FactoryEmployee) {
        this.factoryEmployeeObject = factoryEmpObject;
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
    }

    Add() {
        this.Employees.push(this.EmployeeCurrentObj);
        this.Employees = this.Employees.slice();
        this.EmployeeCurrentObj = new Employee();
    }

    Cancel() {
        this.EmployeeCurrentObj = new Employee();
    }

    Update() {
        for (let emp of this.Employees) {
            if (emp.EmployeeCode == this.EmployeeCurrentObj.EmployeeCode) {
                emp.EmployeeName = this.EmployeeCurrentObj.EmployeeName;
                emp.City = this.EmployeeCurrentObj.City;
            }
        }
        this.EmployeeCurrentObj = new Employee();
    }
    Select(empSelected: Employee) {
        this.EmployeeCurrentObj = this.factoryEmployeeObject.Create(this._EmployeeType);
        this.EmployeeCurrentObj.EmployeeCode = empSelected.EmployeeCode;
        this.EmployeeCurrentObj.EmployeeName = empSelected.EmployeeName;
        this.EmployeeCurrentObj.City = empSelected.City;
        this.EmployeeCurrentObj.EmployeeType = empSelected.EmployeeType;
        this._EmployeeType = empSelected.EmployeeType;
    }
}