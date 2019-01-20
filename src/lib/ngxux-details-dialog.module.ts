import { NgModule }                           from '@angular/core';
import { ReactiveFormsModule }                from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxuxMatDialogModule }               from '@ngxux/ngxux-mat-dialog';
import { NgxuxDetailsDialogComponent }        from './ngxux-details-dialog.component';

@NgModule({

    declarations: [

        NgxuxDetailsDialogComponent

    ],

    imports: [

        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,

        NgxuxMatDialogModule,


    ],

    exports: [

        NgxuxDetailsDialogComponent

    ],

    entryComponents: [

        NgxuxDetailsDialogComponent

    ]

})
export class NgxuxDetailsDialogModule {
}
