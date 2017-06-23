export class Salary {
    private SalaryAmount: number = 10000;
    private SalaryAccountType: string = "Salary A/c";
    private SalaryAccountNumber: number = 150001;

    public getSalary():number {
        return this.SalaryAmount;
    }

    public getSalaryAccountType():string {
        return this.SalaryAccountType;
    }

    public getSalaryAccountNumber():number {
        return this.SalaryAccountNumber;
    }
}