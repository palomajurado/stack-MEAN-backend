import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

// contendra modulos con los que interactuaremos con la base de datos desplegada en mongodb atlas
export class EmployeeService {
  URL_API = 'https://api-colaborator-employees.herokuapp.com/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(this.URL_API);
  }
}
