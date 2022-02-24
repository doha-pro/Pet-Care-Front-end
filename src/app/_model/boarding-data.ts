export interface BoardingData {
    name: string,
    desc: string,
    phone: string,
    photo: string,
    price: number,
}
export class Booking {
    constructor(
        public name?:string,
        public email?:string,
        public phone?:string,
        public BP_payment?:string,
        public petname?:string,
        public pettype?:string,
        public days?:any,
        public food?:string,
        public gender?:string,
        public cardname?:string,
        public cardnumber?:number,
        public cvv?:number,
        public expirationdate?:Date,
     
        
    ){

    }
}
