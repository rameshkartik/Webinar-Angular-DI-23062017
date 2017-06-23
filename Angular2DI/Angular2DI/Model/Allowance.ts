export class Allowance {
    private HRA: number = 5000;
    private TravelAllowance: number = 20000;
    private MobileBillAllowance: number = 4000;

    public getHRA(): number {
        return this.HRA;
    }

    public getTravelAllowance(): number {
        return this.TravelAllowance;
    }

    public getMobileBillAllowance(): number {
        return this.MobileBillAllowance;
    }
}
