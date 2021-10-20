import { Component, OnInit } from '@angular/core';
import { ApireqService } from 'src/app/services/apireq.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentsData: any;
  dataSource: any;

  constructor(private apireqService: ApireqService) { }

  ngOnInit(): void {
    this.retrieveAppointments();
  }

  retrieveAppointments() {
    this.apireqService.allAppointments().subscribe(
      data => {
        this.appointmentsData = data;
        this.dataSource = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  displayedColumns: string[] = ['appointmentId', 'fullname', 'date', 'time','consDept','mobileNo'];
}