import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap, debounce, retry } from "rxjs/operators";
import { Injectable, Inject, inject } from '@angular/core';
import { LoadingComponent } from './loadingComponent';
import { EnvironmentVM } from './environmentVM';
import { prodenvironment } from '../environments/environment.prod';
import { testenvironment } from '../environments/environment.test';
import { isDevMode } from '@angular/core';
declare var $: any;
declare var Enumerable: any;
@Injectable({ providedIn: 'root' })
export class ServiceProvider {
  messageService: any;
  httpOptions: any;
  isEnvironmentUsed: boolean;
  private progress: LoadingComponent = inject(LoadingComponent);
  public constructor(@Inject(HttpClient) private http: HttpClient) {

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': `*`,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',

      }),
      withCredentials: true
    };

  }

  public getNYearFromToday(n: number) {
    var currentDate = new Date();
    return new Date(`${currentDate.getMonth() + 1}-${currentDate.getDay()}-${currentDate.getFullYear() - n}`);
  }

  public getIconsForDtPicker(): object {
    return {
      time: 'ri-time-line',
      date: 'ri-calendar-line',
      up: 'ri-arrow-up-s-line',
      down: 'ri-arrow-down-s-line',
      previous: 'ri-arrow-left-s-fill',
      next: 'ri-arrow-right-s-fill',
      today: 'ri-checkbox-circle-line',
      clear: 'ri-delete-bin-line',
      close: 'ri-close-line'
    }
  }

  public setHeaderToken(token: string) {
    //   let env = this.getEnvironment();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token,
        'Access-Control-Allow-Origin': `*`,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
    };
  }

  public createGrid<T>(id: string, column: any[], dataStore: T[]) {
    $("#gridContainer").dxDataGrid({
      dataSource: {
        store: dataStore
      },
      showBorders: true,
      remoteOperations: {
        sorting: true,
        paging: true
      },
      paging: {
        pageSize: 12
      },
      pager: {
        showPageSizeSelector: true,
        allowedPageSizes: [8, 12, 20]
      },
      columns: column
    }).dxDataGrid("instance");
  }

  public isGuid(stringToTest: string): boolean {
    if (stringToTest[0] === "{") {
      stringToTest = stringToTest.substring(1, stringToTest.length - 1);
    }
    var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    return regexGuid.test(stringToTest);
  }
  private formatUrl(url: string) {
    if (this.isEnvironmentUsed) {
      var domain = this.getEnvironment();
      return `${domain.api}/${url}`;
    } else {
      return `${url}`;
    }
  }
  public getData<T>(url: string, ev: any) {
    this.progress.show();

    return this.http.get<T[]>(this.formatUrl(url), this.httpOptions)
      .pipe(
        catchError(this.handleError('getData', []))
      ).subscribe(x => {
        if (ev) ev(x);
        this.progress.hide();
      });
  }
  showProgress() {
    this.progress.show();
  }

  hideProgress() {
    this.progress.hide();
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }

  formatDateAsDDMMYYYY(date: Date): string {
    return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  }

  public jQuery(selector: any = null): any {
    if (selector == null)
      return $;
    else
      return $(selector);
  }



  public getLinq(data: any[]): any {
    return Enumerable.from(data);
  }

  public putData<T>(url: string, data: T, ev: any) {
    this.progress.show();
    return this.http.put<T>(this.formatUrl(url), data, this.httpOptions)
      .pipe(
        catchError(this.handleError('petData', []))
      ).subscribe(x => {
        if (ev) ev(x);
        this.progress.hide();
      });
  }

  public postFile(url: string, fileField: string, obj: Array<any>, callBack: any) {

    this.showProgress();
    let formData = new FormData();
    formData.append(fileField, obj[fileField], "file.jpg");
    let propertyNames = Object.keys(obj);

    // loop through the property names and log them to the console
    for (let propertyName of propertyNames) {
      if (propertyName.toLocaleLowerCase() == fileField?.toLocaleLowerCase()) continue;
      formData.append(propertyName, obj[propertyName]);
    }

    // set the headers for the HTTP request
    var option = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': `*`,
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      })
    };

    //console.log(option);
    // send the HTTP POST request with the file and fields
    return this.http.post(url //this.formatUrl(url)
      , formData, option).pipe(retry(3),
        catchError(this.handleError('postData', []))
      ).subscribe(x => {
        this.progress.hide();
        if (callBack) callBack(x);
      });
  }

  public postData<T>(url: string, data: T, ev: any) {
    this.progress.show();
    return this.http.post<T>(this.formatUrl(url),
      data, this.httpOptions)
      .pipe(retry(3),
        catchError(this.handleError('postData', []))
      ).subscribe(x => {
        if (ev) ev(x);
        this.progress.hide();
      });
  }

  public delete<T>(url: string, data: T, ev: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: data,
    };

    return this.http.delete(this.formatUrl(url), options
    ).pipe(
      catchError(this.handleError('DeleteData', []))

    ).subscribe(x => {
      if (ev) ev(x);
      this.progress.hide();
    });
  }

  private log(message: string) {
    //this.messageService.add(`HeroService: ${message}`);
  }
  public getEnvironment(): EnvironmentVM {
    if (isDevMode() == true) {
      return testenvironment;
    } else {
      return prodenvironment;
    }
  }

  public isValidateEmail(email: string): boolean {
    if (!email) return true;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  public isPhoneNumberValidate(phone: string): boolean {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.progress.hide();
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

};
