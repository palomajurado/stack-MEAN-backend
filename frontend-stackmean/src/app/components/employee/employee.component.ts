import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

// decorador
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})

//clase de logica en cada componente
export class EmployeeComponent implements OnInit {
  constructor(private employeservice: EmployeeService) {}

  ngOnInit(): void {
    this.employeservice.getEmployees().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
