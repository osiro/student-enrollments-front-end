import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import * as fromRouterSelector from '../store/selectors/router.selectors';
import * as fromEnrollmentSelector from '../store/selectors/enrollment.selectors';
import { setCurrentSubject } from '../store/actions/subject.actions';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoursesComponent implements OnInit {
  currentSubjectCode: string;
  courses: MatTableDataSource<Course>;
  expandedCourse: Course | null;
  displayedColumns: string[] = ['startOn', 'endOn', 'exactDate', 'isHoliday', 'weekday', 'room', 'campus'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.updateCurrentSubject();
    this.updateCourses();
  }

  updateCurrentSubject(): void {
    this.store.select(fromRouterSelector.selectRouteParam('subjectCode'))
      .subscribe((subjectCode: string) => {
        this.store.dispatch(setCurrentSubject({ code: subjectCode }));
        this.currentSubjectCode = subjectCode;
      });
  }

  updateCourses(): void {
    this.store.select(fromEnrollmentSelector.getCourses)
      .subscribe((courses: Course[]) => {
        this.courses = new MatTableDataSource(courses);
        this.courses.paginator = this.paginator;
      });
  }

  sortData(sort: Sort) {
    const data = this.courses.data.slice();
    if (!sort.active || sort.direction === '') {
      return;
    }

    data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'startOn': return this.compare(new Date(a.startOn), new Date(b.startOn), isAsc);
        case 'endOn': return this.compare(new Date(a.endOn), new Date(b.endOn), isAsc);
        case 'exactDate': return this.compare(new Date(a.exactDate), new Date(b.exactDate), isAsc);
        case 'isHoliday': return this.compare(+a.isHoliday, +b.isHoliday, isAsc);
        case 'room': return this.compare(a.room, b.room, isAsc);
        case 'campus': return this.compare(a.campus, b.campus, isAsc);
        default: return 0;
      }
    });

    this.courses = new MatTableDataSource(data);
    this.courses.paginator = this.paginator;
  }

  private compare(a: number | string | Date, b: number | string | Date, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
