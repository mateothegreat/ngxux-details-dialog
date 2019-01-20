import { NgModule }                           from '@angular/core';
import { ReactiveFormsModule }                from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { NgxuxMatDialogModule }               from '../../../ngxux-mat-dialog/src/lib/ngxux-mat-dialog.module';
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
