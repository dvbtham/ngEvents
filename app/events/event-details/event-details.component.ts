import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from "@angular/router";
import { EventService } from '../shared/event.service';
import { IEvent } from "../shared/event.model";
import { ISession } from "../index";
@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [
        `.container { padding-right: 20px; padding-left: 20px;}
         .event-image { width: 100px;}
         a { cursor: pointer;}
        `
    ]
})
export class EventDetailsComponent implements OnInit {
    event: IEvent
    addMode: boolean
    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }
    addSession() {
        this.addMode = true;
    }
    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(x => x.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }
    cancelNewSession(){
        this.addMode = false
    }
    ngOnInit() {
        let id: any = this.route.snapshot.params['id'];
        this.event = this.eventService.getEvent(+id);
    }
}