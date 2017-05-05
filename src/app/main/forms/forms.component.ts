import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { moment, _ } from '../../vendor/third-party-libs';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { MdSnackBar } from '@angular/material';

import { SpinnerService } from '../../ui-components/spinner/providers/spinner.service';
import { Observable } from 'rxjs/Observable';

// mydatepicker plugin and mydaterangepicker plugin
import { IMyOptions } from 'mydatepicker';
// import model form
import { ModelForm } from './models/model-form';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['../../app.component.scss', './forms.component.scss']
})
export class FormsComponent implements OnInit, AfterViewInit {
  // form
    // have instance var #pageForm... need @ViewChild() ??
  // private pageForm: FormGroup;
  public errorMsg: string;

  public modelForm = new ModelForm(
    'Durian', '1-800-000-0000', '0 Digital Place', '00234',
    null, 'aston-martin', 'nintendo-switch',
    true, true, true, true, 'spring',
    { date: { year: 2018, month: 10, day: 9 } },
    { date: { year: 2018, month: 10, day: 9 } },
    {
      beginDate: {year: 2016, month: 10, day: 9},
      endDate: {year: 2016, month: 10, day: 19}
    },
    true, true, true, true, true );

  public spinnerStatus: boolean; // may need to ViewChild for this one...

  // selects
  public selectedFood: string;
  public selectedCar: string;
  public selectedConsole: string;

  // radios
  public selectedSeason: string;
  public foods: any[] = [
    {'value': 'steak', 'viewValue': 'Steak'},
    {'value': 'pizza', 'viewValue': 'Pizza'},
    {'value': 'tacos', 'viewValue': 'Tacos'}
  ];
  public cars: any[] = [
    {'value': 'bugatti', 'viewValue': 'Bugatti'},
    {'value': 'maserati', 'viewValue': 'Maserati'},
    {'value': 'aston-martin', 'viewValue': 'Astin Martin'}
  ];
  public consoles: any[] = [
    {'value': 'nintendo-switch', 'viewValue': 'Nintendo Switch'},
    {'value': 'ps4', 'viewValue': 'PS4 Pro'},
    {'value': 'xbox-one', 'viewValue': 'Xbox One'}
  ];
  public seasons = [
    'Winter', 'Spring', 'Summer', 'Autumn'
  ];

  // date picker
  private datePickerOptions: IMyOptions = {
    dateFormat: 'dd.mm.yyyy'
  };
  // daterangepicker options
  private myDateRangePickerOptions: IMyOptions = {
      // other options...
      dateFormat: 'dd.mm.yyyy',
  };
  // private mydaterangeModel: Object = {
  //   beginDate: {year: 2016, month: 10, day: 9},
  //   endDate: {year: 2016, month: 10, day: 19}
  // };
  // private dateModel1: Object = { date: { year: 2018, month: 10, day: 9 } };
  // private dateModel2: Object = { date: { year: 2018, month: 10, day: 9 } };

  constructor(
    private _router: Router,
    private _spinner: SpinnerService,
    private _snackbar: MdSnackBar ) {
  }

  ngOnInit() {
    // hookup spinner
    this._spinner.spinnerStatus
      .subscribe( (status: boolean) => this.spinnerStatus = status);
    // END SPINNER
    setTimeout(() => {
      this._spinner.displaySpinner(false);
    }, 3000);
  }

  ngAfterViewInit() {
    this.openSnackbar();
  }

  // snackbar for errors
  openSnackbar() {
    this._snackbar.open( this.errorMsg, 'Close', {duration: 5000});
  }


}
