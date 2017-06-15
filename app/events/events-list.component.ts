import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "../common/toastr.service";
import { EventService } from './shared/event.service'
import { IEvent } from "./shared/event.model";
@Component({
    template: `
        <h1> Upcoming Angular 2 Events </h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumnail (click)="handleThumnailClicked(event.name)" [event]="event"></event-thumnail>
            </div>
        </div>
        `
})
export class EventsListComponent implements OnInit{
    events: IEvent[]
    constructor(private eventService: EventService, 
    private toastr: ToastrService, private route:ActivatedRoute) {
    }
    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }
    handleThumnailClicked(eventName){
        this.toastr.success(eventName);
    }
}