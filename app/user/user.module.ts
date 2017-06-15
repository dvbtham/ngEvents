import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProfileComponent } from "./profile.component";
import { UserRoutes } from "./user.routes";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(UserRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: []
})
export class UserModule {
       
}