
export class RequestVM {
    quote: string = "";
    name: string = "";
    date: Date
    status: string = '';

    isValid() {
        return this.quote != "" &&
            this.name != "" &&
            this.date != null &&
            this.status != "";
    }

    copy(value: RequestVM) {
        this.quote = value.quote;
        this.name = value.name;
        this.date = value.date;
        this.status = value.status;
    }
}
