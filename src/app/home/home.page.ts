import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myDate = new Date().toISOString();
  customPickerOptions: any;
  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  dateChanged(date) {
    console.log(date.detail.value);
    console.log(this.myDate);
  }
}
