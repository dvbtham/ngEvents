import { Routes } from "@angular/router";
import { 
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    SessionComponent,
    EventThumnailComponent,
    EventListResolver
 } from "./events/index";

import { Error404Component } from "./error/404.component";

export const appRoutes: Routes = [
    {
        path: 'events', component: EventsListComponent, resolve: {
            events: EventListResolver
        }
    },
    {
        path: 'events/new', component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: 'events/session/new', component: SessionComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]