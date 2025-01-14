import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class ValidationService {
    isAlphabetic = /^[A-Za-z ]+$/;  // string only
    isSpecialCharacters = /^[^A-Za-z0-9]+$/; // special charator
    isNumeric = /^[0-9]+$/; // number only
    isAlphanumeric = /^[A-Za-z0-9 ]+$/; //  string and number only
    isEmail = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
    // string only
    stringValidator(str: String) {
        return str.match(this.isAlphabetic);
    }

    // string only
    emailValidator(str: String) {
        return str.match(this.isEmail);
    }

    // special charator
    specialCaratorValidator(str: String) {
        return str.match(this.isSpecialCharacters);
    }

    // number only
    numberValidator(str: String) {
        return str.match(this.isNumeric);
    }

    //  string and number only
    numberAndStringValidator(str: String) {
        return str.match(this.isAlphanumeric);
    }

    // string and charator
    ValidateString(value: string, msEmty: string, msInvalid: string) {
        if (value == '') {
            return msEmty;
        } else {
            if (!this.stringValidator(value)) {
                return msInvalid;
            } else {
                return '';
            }

        }
    }

    ValidateStringNumber(value: string, msEmty: string, msInvalid: string) {
        if (value == '') {
            return msEmty;
        } else {
            if (!this.numberAndStringValidator(value)) {
                return msInvalid;
            } else {
                return '';
            }

        }
    }

    ValidateStringNumberLength(value: string, length: number, msEmty: string, msInvalid: string, mslength: string) {
        if (value == '') {
            return msEmty;
        } else {
            if (!this.numberAndStringValidator(value)) {
                return msInvalid;
            } else {
                if (value.length > length) {
                    return mslength;
                } else {
                    return '';
                }
            }

        }
    }

    // string and charator and length
    ValidateStringLength(value: string, length: number, msEmty: string, msInvalid: string, mslength: string) {
        if (value == '') {
            return msEmty;
        } else {
            if (!this.stringValidator(value)) {
                return msInvalid;
            } else {
                if (value.length > length) {
                    return mslength;
                } else {
                    return '';
                }
            }

        }
    }



    // validate Date and Time
    ValidateDateTimeEmty(value: any, message: string) {
        if (value == undefined) {
            return message;
        } else {
            return '';
        }
    }

    // CompeirDate
    ValidateCompeir(Start: any, End: any, msage: string) {
        if (Start > End) {
            return msage;
        } else {
            return '';
        }
    }

    ValidateNotEqualCompeir(Start: any, End: any, msage: string) {
        if (Start >= End) {
            return msage;
        } else {
            return '';
        }
    }

    ValidateNumber(value: number, msEmty: string, msInvalid: string) {

        if (isNaN(Number(value))) {
            return msEmty;
        }

        if (value == undefined) {
            return msInvalid;
        }
        if (value < 0) {
            return msInvalid
        }
        if (!this.numberValidator(value.toString())) {
            return msInvalid;
        } else {
            return '';
        }
    }

    ValidatePhone(value: string, length: number, mesEmty: string, msInvalid: string) {
        if (value == '') {
            return mesEmty;
        }

        if (!this.numberValidator(value)) {
            return msInvalid
        }

        if (value.length > length) {
            return msInvalid;
        } else {
            return '';
        }
    }

    ValidateEmail(value: string, length: number, mesEmty: string, msInvalid: string) {
        if (value == '') {
            return mesEmty;
        }

        if (!this.emailValidator(value)) {
            return msInvalid
        }

        if (value.length > length) {
            return msInvalid;
        } else {
            return '';
        }
    }


}
