
export class providerVM {
    supplier: string = "";
    location: string = "";

    isValid() {
        return this.supplier != "" &&
            this.location != "";
    }

    copy(value: providerVM) {
        this.supplier = value.supplier;
        this.location = value.location;
    }
}
