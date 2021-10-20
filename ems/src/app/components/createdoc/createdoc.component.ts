import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ApireqService } from 'src/app/services/apireq.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createdoc',
  templateUrl: './createdoc.component.html',
  styleUrls: ['./createdoc.component.css']
})
export class CreatedocComponent implements OnInit {

  Depts: any = ['Cardiology', 'Oncology', 'Paediatrics', 'Orthopaedics', 'ENT', 'Obsterics/Gynaecology', 'Neurology', 'Nephrology', 'Opthamology'];

  docForm = new FormGroup({
    docName: new FormControl('', Validators.required),
    docEmail: new FormControl('', Validators.required),
    docPh: new FormControl('', Validators.required),
    docDept: new FormControl('', Validators.required)
  });

  constructor(private apireqService: ApireqService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.docForm.value);
    this.apireqService.createDoctor(this.docForm.value).subscribe(
      (res) => {
        console.log(res);
        if(res) {
          this.snackBar.open("Doctor Created!");
        }
        else {
          this.snackBar.open("Doctor could not be created! Please try again.")
        }
      }
    );
  }

}
