import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReplaySubject }                      from 'rxjs';
import { NgxuxDetails }                       from './ngxux-details';

@Injectable({
    providedIn: 'root'
})
export class NgxuxDetailsDialogDataService {

    public click$: ReplaySubject<NgxuxDetails> = new ReplaySubject();

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        description: new FormControl(''),

    });

    public onNextClick(): void {

        this.click$.next(this.formGroup.value);

    }

}
