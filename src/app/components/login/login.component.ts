import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { 
  FormBuilder,
  FormGroup,
  Validators 
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public loginForm: FormGroup;

  constructor(
		private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
		this.loginForm = this.formBuilder.group({
			username: ['', Validators.required],
			password: ['', Validators.required],
			type: ['']
		});
  }

  submitLogin() {
		const user = this.loginForm.value;

    user.loggedIn = true;
    localStorage.setItem("user", JSON.stringify(user));

    this.router.navigate(['/loot']);
  }

}
