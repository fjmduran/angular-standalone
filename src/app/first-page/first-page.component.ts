import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      first-page works!
    </p>
  `,
  styles: [
  ]
})
export class FirstPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
