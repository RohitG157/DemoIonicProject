import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class ExceptionService {

    constructor(
        private loading: LoadingService
    ) { }

    /***
    * @name errorHandler
    * @desc handle errors according to status and show alert.
    * @param err
    * @return void
    */
    errorHandler = (err, isLoader) => {
        if (isLoader) {
            this.loading.dismiss();
        }
        return throwError(err);
    }
}
