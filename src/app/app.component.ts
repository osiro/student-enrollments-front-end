import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store/reducers';
import * as fromLoadingSelectors from './store/selectors/loading.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'student-enrollments-front-end';
  showLoading = false;

  constructor(private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.updateLoading();
  }

  updateLoading(): void {
    this.store.select(fromLoadingSelectors.getStatus)
      .subscribe(status => this.showLoading = status);
  }
}
