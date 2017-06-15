import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ISession, restrictedWord } from "../shared/index";

@Component({
    selector: 'create-session',
    templateUrl: 'app/events/event-details/create-session.component.html',
    styles: [`
       em { float: right; color: #e05c65; padding-left: 10px;}
      .error input, .error select, .error textarea { background-color: #e3c3c5; }
      .error ::webkit-input-placeholder { color: #999; }
      .error ::-moz-placeholder { color: #999; }
      .error :-moz-placeholder { color: #999; }
      .error :ms-input-placeholder { color: #999; }
    `]
})
export class SessionComponent implements OnInit {
    @Output() saveNewSession = new EventEmitter();
    @Output() cancelNewSession = new EventEmitter();
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl
    ngOnInit(): void {
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWord(['foo', 'bar'])])

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

    saveSession(formValue) {
        let session: ISession = {
            id: undefined,
            name: formValue.name,
            presenter: formValue.presenter,
            duration: formValue.duration,
            level: formValue.level,
            abstract: formValue.abstract,
            voters: []
        }
        this.saveNewSession.emit(session)
    }
    cancel(){
        this.cancelNewSession.emit();
    }
}