import { Component, Input} from '@angular/core'
import { IEvent } from "./shared/event.model";
@Component({
    selector: 'event-thumnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}} 
            (<span [ngSwitch]="event?.time"> 
                <span *ngSwitchCase="'8:00 am'"> Early Start</span>
                 <span *ngSwitchCase="'10:00 am'"> Late Start</span>
                 <span *ngSwitchDefault> Normal Start</span>
            </span>)
        </div>
        <div>Price: $\{{event?.price}}</div>
        <div>
            <span>Location: {{event?.location.address}}</span>
            <span class="pad-left">{{event?.location.city}}, {{event?.location.country}}</span>
        </div>
        <div *ngIf="event?.status">Status: {{event?.status}}</div>
    </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        `]
})
export class EventThumnailComponent {
    @Input() event:IEvent
    
}