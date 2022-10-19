import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      third-page works!
    </p>
  `,
  styles: [
  ]
})
export class ThirdPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
