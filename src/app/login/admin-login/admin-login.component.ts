import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  @Input() returnUrl: string;
  submitted = false;
  error: '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  get f() {return this.loginForm.controls;}

  onSubmit(){
    
    this.submitted = true;
    //stop here if form is invalid
    if(this.loginForm.invalid){
      return;
    }

    //button disabled once clicked
    this.loading = true;

    this.authenticationService.adminLogin(this.f.username.value, this.f.password.value)
      .subscribe(data=>{
        if(data){
          localStorage.setItem('currentAdmin', JSON.stringify(data))
        }

        this.router.navigate([this.returnUrl]);
      },
      error=>{
        this.error = error.statusText;
        //button removed from disabled
        console.log(error);
        this.loading =false;
      })
  }
}
