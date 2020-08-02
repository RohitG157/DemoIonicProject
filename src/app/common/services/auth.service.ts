import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { API_CONSTANTS } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    constructor(
        private http: BaseService
    ) { }

    validateCust(data) {
        return this.http.post(`${API_CONSTANTS.VALIDATE_CUST}`, data, true);
    }
}
