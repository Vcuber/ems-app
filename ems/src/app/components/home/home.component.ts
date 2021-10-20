import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  slides = [
    {'image':'https://www.starcarehospitals.com/images/starcare-redefining-benchmark-1.jpg'},
    {'image':'https://mk0orissadnt005hgxer.kinstacdn.com/wp-content/uploads/2019/05/Hospital.jpg'},
    {'image':'https://ik.imagekit.io/iis/Monilek/nursing_slider_rHzBkVlMW.jpg'},
    {'image':'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80'}
  ];

  ngOnInit(): void {
  }

}
