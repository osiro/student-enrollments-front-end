import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.sass']
})
export class SubheaderComponent {
  @Input() subtitle: string;
  @Input() backButton = true;

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
