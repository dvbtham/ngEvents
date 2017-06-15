import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
       em { float: right; color: #e05c65; padding-left: 10px;}
      .error input { background-color: #e3c3c5; }
      .error ::webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class ProfileComponent {
  profileForm: FormGroup
  private firstName:FormControl
  private lastName:FormControl
  constructor(private route: Router, private auth: AuthService) {

  }
  ngOnInit() {
     this.firstName = new FormControl(this.auth.currentUser.firstName,
     [Validators.required, Validators.pattern("[a-zA-Z].*")]);
     this.lastName = new FormControl(this.auth.currentUser.lastName,
     [Validators.required, Validators.pattern("[a-zA-Z].*")]);

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }
  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.route.navigate(['events']);
    }
  }

  validationFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }
  validationLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.route.navigate(['events']);
  }
}