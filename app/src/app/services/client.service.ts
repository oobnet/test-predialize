import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor (
    private readonly http: HttpClient,
  ) {
  
  }

  getAll() {
    return this.http.get<[]>(`${this.apiUrl}/clients`);
  }

  getById(_id:any) {
    return this.http.get<[]>(`${this.apiUrl}/clients/${_id}`);
  }

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
