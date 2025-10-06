import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  imports: [],
  templateUrl: './empty-state.html',
  styleUrl: './empty-state.scss'
})
export class EmptyState {
  @Input() notFoundHeading: string = 'Sorry, we found no results for what you are looking for...'


}
