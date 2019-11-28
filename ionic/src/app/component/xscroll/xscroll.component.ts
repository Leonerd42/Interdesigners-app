import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'xscroll',
  templateUrl: './xscroll.component.html',
  styleUrls: ['./xscroll.component.scss'],
})
export class XscrollComponent implements OnInit {

  @Output() ChangeDay = new EventEmitter();

  selectedDate: number;
  dates: number[];
  daysofWeek: string[];

  constructor(private dataService: DatabaseService) {
      this.dates = this.dataService.GetDates()
      this.daysofWeek = this.dataService.GetDaysofWeek()
      this.selectedDate = this.dates[0];
  }

  ngOnInit() {
     //console.log(this.dates);
  }

  SelectedDate(day) {
    this.selectedDate = day;
    this.ChangeDay.emit(this.selectedDate);
  }
}
