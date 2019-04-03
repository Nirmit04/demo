import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  selectedFile: FileList;
  formdata = new FormData();
  finalForm = any;
  jobForm = new FormGroup({
    companyname: new FormControl('', Validators.required),
    designation: new FormControl('', Validators.required),
    jd: new FormControl(''),

  })


  constructor() { }

  ngOnInit() {
  }

  chooseFile(event) {
    this.selectedFile = event.target.files
  }

  submit(form) {
    this.finalForm = {
      formdata: form,
      fileData: this.selectedFile.item(0)
    }
    //SEND THIS IN POST REQUEST
    console.log(this.formdata);
  }

}
