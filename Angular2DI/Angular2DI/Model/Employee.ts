export class Employee {

    public EmployeeType: string = "Employee";

    public EmployeeCode: Number = 4040;
    public EmployeeName: string = "Rameshkartik";
    public City: string = "Chennai";

    IsValidEmployee(): boolean {
        if (this.EmployeeType == "Employee" && this.City == "Chennai") {

            return true;
        }
        else {

            return false;
        }
    }
}

export class HigherLevelEmployee extends Employee {
    public EmployeeType: string = "HighLevel";

    public EmployeeCode: Number = 2020;
    public EmployeeName: string = "Ravi";
    public City: string = "Bangalore";

    IsValidEmployee(): boolean {
        if (this.EmployeeType == "HighLevel" && this.City == "Bangalore") {
            return true;
        }
        else {
            return false;
        }
    }
}