
export class CheckHealthVM {
    supplier: string = "";
    location: string = "";

    isValid() {
        return this.supplier != "" &&
            this.location != "";
    }

    copy(value: CheckHealthVM) {
        this.supplier = value.supplier;
        this.location = value.location;
    }
}
