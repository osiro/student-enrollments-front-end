import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../store/reducers';
import { loadSubjects } from '../store/actions/subject.actions';
import { Subject } from '../models/subject';
import * as fromSubjectSelectors from '../store/selectors/subject.selectors';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.sass']
})
export class SubjectsComponent implements OnInit {
  subjects: MatTableDataSource<Subject>;
  displayedColumns: string[] = ['code', 'description'];
  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.store.dispatch(loadSubjects());
    this.updateSubjects();
  }

  updateSubjects(): void {
    this.store.select(fromSubjectSelectors.getSubjects)
      .subscribe(subjects => this.subjects = new MatTableDataSource(subjects));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.subjects.filter = filterValue.trim().toLowerCase();
  }
}
