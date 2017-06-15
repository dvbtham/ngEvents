import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from "./events/events-app.component";
import { NavBarComponent } from "./nav/nav.component";
import { Error404Component } from "./error/404.component";
import { ToastrService } from "./common/toastr.service";
import { appRoutes } from "./routes";
import { RouterModule } from "@angular/router";

import {
    EventService,
    EventThumnailComponent,
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    SessionComponent, 
    SessionListComponent
} from './events/index'
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavBarComponent,
        Error404Component,
        SessionComponent,
        SessionListComponent
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ]
})
export class AppModule { }
function checkDirtyState(create: CreateEventComponent) {
    if (create.isDirty)
        return window.confirm("You have not save this event, do you really want to cancel?");
    return true;
}