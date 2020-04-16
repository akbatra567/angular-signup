import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title='Registration';
  regForm:FormGroup;
  submitted=false;

  // form = new FormGroup({
  //   firstname: new FormControl('', [Validators.required, Validators.minLength(3)]), 
  // });

  // get f(){
  //   return this.form.controls;
  // }

  // submit(){
  //   console.log(this.form.value);
  // }

  constructor(private formbuilder:FormBuilder) { }
 
  ngOnInit(): void {
    this.regForm = this.formbuilder.group({
      'firstName' :['', Validators.required],
      'lastName' : ['', Validators.required],
      'username' : ['', [Validators.required, Validators.minLength(6)]],
      'password' : ['', [Validators.required, Validators.minLength(8)]],
      'confirmPassword': ['', Validators.required, Validators.minLength(8)],
      'dob' : ['', Validators.required],
      'country' : ['', Validators.required]
    }, {validator: this.matchingPasswords('password', 'confirmPassword')});

  }

  matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey];
      let passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({notEquivalent: true})
      }
    }
  }

  get formData(){ return this.regForm.controls}

  submit(){
    this.submitted = true;
    if(this.regForm.invalid){
      return;
    }

    console.log(JSON.stringify(this.regForm.value));

  }
}
