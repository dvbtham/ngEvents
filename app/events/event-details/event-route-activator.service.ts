import { Injectable } from '@angular/core'
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router'
import { EventService } from '../shared/event.service';
@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService:EventService, private router:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        let id = route.params["id"];
        const eventExists = !!this.eventService.getEvent(+id);
        if(!eventExists)
            this.router.navigate(['/404']);
        return eventExists;
    }

}