
export class responseVM {
    firstName: string = "";
    lastName: string = "";
    email: string = "";
    phone: string = "";
    dateOfService: Date;
    quoteName: string = "";
    date: Date;
    expiredDate: Date;
    quotation: Array<quoteVM> = new Array<quoteVM>();

}

export class quoteVM {
    product: string = '';
    description: string = '';
    price: number;
    qty: number;
    total: number;
}