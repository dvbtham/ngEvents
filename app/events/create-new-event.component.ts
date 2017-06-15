import { Component, Input} from '@angular/core'
import { Router } from "@angular/router";
import { AuthService } from "../user/auth.service";
import { EventService } from "./shared/event.service";
@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
       em { float: right; color: #e05c65; padding-left: 10px;}
      .error input { background-color: #e3c3c5; }
      .error ::webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private route: Router, private eventService: EventService) {

  }
    saveEvent(formValues){
        this.isDirty = false;
        this.eventService.addEvent(formValues);
        this.route.navigate(['/events']);
    }
   cancel(){
        this.route.navigate(['/events']);
   }   
}