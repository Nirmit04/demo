import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  selectedFile: FileList;

  jobForm = new FormGroup({
    companyname: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    jd: new FormControl(''),

  })


  constructor() { }

  ngOnInit() {
  }

  chooseFile(event) {
    this.selectedFile = event.target.files;
  }

  submit(form) {
    console.log(form);
  }

}
