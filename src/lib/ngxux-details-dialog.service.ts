import { Injectable }                                    from '@angular/core';
import { NgxuxMatDialogService, NgxuxMatDialogSettings } from '@ngxux/ngxux-mat-dialog';
import { NgxuxDetailsDialogComponent }                   from './ngxux-details-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class NgxuxDetailsDialogService {

    public constructor(private dialogService: NgxuxMatDialogService) {

    }

    public open(obj: {

        title: string

    }): void {

        setTimeout(() => {

            this.dialogService.open(NgxuxDetailsDialogComponent, new NgxuxMatDialogSettings({

                id: 'details',

                title: obj.title,

                width: '300px',
                height: '300px',

                nextLabel: 'Save',
                nextShow: true

            }));

        }, 500);

    }

    public close(): void {

        this.dialogService.close('details');

    }

}
