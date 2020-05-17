import { Component, OnInit, Input } from '@angular/core';
import { Enrollment } from '../models/enrollment';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.sass']
})
export class EnrollmentsComponent implements OnInit {
  @Input()
  enrollments: Enrollment[];

  dataSource: MatTableDataSource<Enrollment>;
  displayedColumns: string[] = ['studentId', 'period', 'durationInMinutes', 'durationCode'];

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.enrollments);
  }
}
