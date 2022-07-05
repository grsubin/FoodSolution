import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted = false;
  loading = false;
  error= '';
  @Input() returnUrl: string;


  constructor(
    private formbuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  get f(){return this.loginForm.controls;}

  onSubmit(){
    this.submitted = true;
    
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;

    this.authenticationService.userLogin(this.f.username.value, this.f.password.value)
      .subscribe(data =>{
        if(data){
          localStorage.setItem('currentUser', JSON.stringify(data));
          console.log(localStorage.getItem('currentUser'));
        }

        this.router.navigate([this.returnUrl]);
      },error=>{
        this.error = error.statusText;
        console.log(error);
        this.loading = false;
      });

    // localStorage.setItem('currentUser', JSON.stringify({username:this.f.username.value, password : this.f.password.value}));
    // console.log(localStorage.getItem('currentUser'));
    // this.router.navigate([this.returnUrl]);
  }
}
