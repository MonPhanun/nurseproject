/// <reference path="../route/route.ts" />
import { Injectable } from "@angular/core";
import { RequestVM } from "../components/viewRequest/viewRequest/requestVM";

@Injectable({ providedIn: 'root' })
export class ViewRequestService {

    storeViewRequest: Array<RequestVM> = []

    mockViewRequest() {
        var mock = new Array<RequestVM>();
        mock = [{ quote: "Quote 5", name: "Rotha Somangka", date: new Date('12/23/2024'), status: "Reject" } as RequestVM,
        { quote: "Quote 1", name: "Vichaka Somangka", date: new Date('12/23/2024'), status: "Reject" } as RequestVM,
        { quote: "Quote 2", name: "Dariya Somangka", date: new Date('6/18/2024'), status: "Accept" } as RequestVM,
        { quote: "Quote 3", name: "Sreaynea Somangka", date: new Date('2/22/2024'), status: "Reject" } as RequestVM,
        { quote: "Quote 4", name: "Monika Somangka", date: new Date('9/23/2024'), status: "Accept" } as RequestVM,]

        return mock;
    }

    getViewRequest() {
        this.storeViewRequest = this.mockViewRequest();
        return this.storeViewRequest;
    }

    createEmbellName(data: RequestVM) {
        if (data.isValid()) {
            this.storeViewRequest.push(data)
        }
    }

    editEmbell(data: RequestVM[]) {
        if (data.length > 0) {
            this.storeViewRequest = this.storeViewRequest.map(e => e == data[0] ? data[1] : e);
        }
    }

    deleteEmbell(data: RequestVM) {
        if (data.isValid()) {
            this.storeViewRequest = this.storeViewRequest.filter(e => e !=data)
        }
    }
}