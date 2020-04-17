import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title='Register';
  companytitle='Comunev';
  about='Comunev is a startup building an interest-based social media platform. We have multiple communities on various interests. We are bringing people together and helping them in making real-life connections.';
  abouttitle='About';

  regForm:FormGroup;
  submitted=false;

  constructor(private formbuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      'firstName' :['', [Validators.required, Validators.minLength(2)]],
      'lastName' : ['', Validators.required],
      'username' : ['', [Validators.required, Validators.minLength(6)]],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'dob' : ['', Validators.required],
      'country' : ['', Validators.required]
    });

  }

  get f(){ return this.regForm.controls}

  submit(){
    this.submitted = true;
    if(this.regForm.invalid){
      return;
    }
    console.log(JSON.stringify(this.regForm.value));
    alert('Success!! :-)');
    this.submitted = false;
    this.regForm.reset();
  }
}
