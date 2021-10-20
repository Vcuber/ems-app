import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApireqService } from 'src/app/services/apireq.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-moa',
  templateUrl: './moa.component.html',
  styleUrls: ['./moa.component.css']
})
export class MoaComponent implements OnInit {

  Depts: any = ['Cardiology', 'Oncology', 'Paediatrics', 'Orthopaedics', 'ENT', 'Obsterics/Gynaecology', 'Neurology', 'Nephrology', 'Opthamology'];

  appForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required),
    consDept: new FormControl('', Validators.required),
    mobileNo: new FormControl('', Validators.required)
  });

  constructor(private apireqService: ApireqService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.appForm.value);
    this.apireqService.createAppointment(this.appForm.value).subscribe(
      (res) => {
        console.log(res);
        if(res) {
          this.snackBar.open("Your appointment has been booked!");
        }
        else {
          this.snackBar.open("Sorry we couldn't create your appointment! Please try again.")
        }
      }
    )
  }
}
