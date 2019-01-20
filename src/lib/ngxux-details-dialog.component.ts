import { Component, OnInit }             from '@angular/core';
import { NgxuxDetailsDialogDataService } from './ngxux-details-dialog-data.service';

@Component({

    selector: 'ngxux-details-dialog',

    template: `

        <ngxux-mat-dialog id="details"
                          [nextEnabled]="ngxuxDetailsDialogDataService.formGroup.valid"
                          (nextClick)="onNextClick()">

            <div class="wrapper">

                <form [formGroup]="ngxuxDetailsDialogDataService.formGroup">

                    <table>

                        <tr>

                            <td>

                                <mat-form-field floatLabel="always">

                                    <input matInput
                                           placeholder="Name"
                                           formControlName="name"
                                           required>

                                </mat-form-field>

                            </td>

                        </tr>

                        <tr>

                            <td>

                                <mat-form-field floatLabel="always">

                                    <textarea matInput
                                              placeholder="Description"
                                              formControlName="description"></textarea>

                                </mat-form-field>

                            </td>

                        </tr>

                    </table>

                </form>

            </div>

        </ngxux-mat-dialog>

    `,

    styleUrls: [ './ngxux-details-dialog.component.scss' ]

})
export class NgxuxDetailsDialogComponent implements OnInit {

    public constructor(public ngxuxDetailsDialogDataService: NgxuxDetailsDialogDataService) {

    }

    public ngOnInit() {

    }

    public onNextClick(): void {

        this.ngxuxDetailsDialogDataService.onNextClick();

    }

}
