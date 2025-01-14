
export class dressingVM {

    DFS: Date = null;
    item: Array<Item> = [];

    isValid() {
        return this.DFS != null &&
            this.item.length != 0;
    }

    copy(value: dressingVM) {
        this.DFS = value.DFS;
        this.item = value.item;
    }
}

export class Item {
    item: string = "";
    image: string = "";
    size: string = "";
    color: string = "";
    quantity: string = "";

    isValid() {
        return this.item != "" &&
            this.color != "" &&
            this.size != "" &&
            this.quantity != "";
    }

    copy(value: Item) {
        this.item = value.item;
        this.size = value.size;
        this.color = value.color;
        this.image = value.image;
        this.quantity = value.quantity;
    }

}

export class Image {
    item: string = "";
    size: string = "";
    color: string = "";
    image: Array<string> = []

}