export class Card {
        firstName:string;
        lastName:string;
        votes:number;
    constructor(
        firstName:string,
        lastName:string,
        votes:number
        )
        {
            this.firstName=firstName;
            this.lastName=lastName;
            this.votes=votes;
    }
    get name(): string {
        //ประกาศ string เพราะเอาfirstname กับ lastname รวมกัน
        return this.firstName + '' + this.lastName;
    }
}
