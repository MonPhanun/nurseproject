import { Component, Injectable } from "@angular/core";
import $ from 'jquery'
@Injectable({
  providedIn: "root"
})

export class LoadingComponent {
  show() {
    $(".background-panel").show();
  }
  hide() {
    $(".background-panel").hide();
  }
}
