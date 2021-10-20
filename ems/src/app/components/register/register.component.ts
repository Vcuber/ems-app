import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Roles: any = ['[user]'];

  regForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    role: new FormControl([])
  });
  

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.regForm.value); 
    this.apiService.register(this.regForm.value).subscribe((res)=> {
      console.log(res);
    })
    this.router.navigate(['/login']);
  }
}
