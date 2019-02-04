import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject }                            from 'rxjs';
import { NgxuxDetails }                       from './ngxux-details';

@Injectable({
    providedIn: 'root'
})
export class NgxuxDetailsDialogDataService {

    public click$: Subject<NgxuxDetails> = new Subject();

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        description: new FormControl(''),

    });

    public onNextClick(): void {

        this.click$.next(this.formGroup.value);

    }

}
