import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { concatAll, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-first-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>first-page works!</p>
 
  `,
  styles: [],
})
export class FirstPageComponent implements OnInit {
 
  constructor() {}

  ngOnInit(): void {
    
  }

 
}


