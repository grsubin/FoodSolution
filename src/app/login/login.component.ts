import { Component, OnInit } from '@angular/core';
import{FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  adminReturnUrl: string;
  userReturnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {


    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    //get return url from route parameter or default to '/'
    this.userReturnUrl = this.route.queryParams['userReturnUrl'] || '/user';
    this.adminReturnUrl = this.route.queryParams['adminReturnUrl'] || '/admin';
    this.authenticationService.logout();


    if(localStorage.getItem('currentUser')){
      this.router.navigate([this.userReturnUrl]);
    }

    if(localStorage.getItem('currentAdmin')){
      this.router.navigate([this.adminReturnUrl]);
    }

    

  }

  // get f() {return this.loginForm.controls;}
  



}
