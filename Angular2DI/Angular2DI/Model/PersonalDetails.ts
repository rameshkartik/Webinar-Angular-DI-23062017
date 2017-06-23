export class PersonalDetails {
    private City: string = "Chennai";
    private Age: number = 24;
    private BloodGroup: string = "O+ve";

    public getCity():string {
        return this.City;
    }

    public getAge(): number {
        return this.Age;
    }

    public getBloodGroup(): string {
        return this.BloodGroup;
    }
}