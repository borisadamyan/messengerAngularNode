import { EventEmitter } from "@angular/core";
import { Error } from './error.model';
export class ErrorService {
    constructor() {
        this.errorOccurred = new EventEmitter();
    }
    handleError(error) {
        const errorData = new Error(error.title, error.error.message);
        console.log(errorData);
        this.errorOccurred.emit(errorData);
    }
}
