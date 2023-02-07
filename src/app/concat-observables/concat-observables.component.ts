import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { concatAll, map, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-concat-observables',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Concatenando observables</h1>
    <ng-container *ngIf="data1$ | async as myData">
      <h2>Con contatAll()</h2>
      {{ myData.data | json }}
      <img [src]="myData.data.avatar" alt="" />
    </ng-container>
    <ng-container *ngIf="data2$ | async as myData">
      <h2>Con el operador switchMap</h2>
      {{ myData.data | json }}
      <img [src]="myData.data.avatar" alt="" />
    </ng-container>
  `,
  styles: [
  ]
})
export class ConcatObservablesComponent implements OnInit {

  data1$!: Observable<SingleUser>;
  data2$!: Observable<SingleUser>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.firstWay();
    this.secondWay();
  }

  firstWay() {
    this.data1$ = this.http
      .get<RawData>('https://reqres.in/api/users?page=2')
      .pipe(
        map((response) => response.data[0].id),
        map((id: number) =>
          this.http.get<SingleUser>(`https://reqres.in/api/users/${id}`)
        ),
        concatAll()
      );
  }

  secondWay() {
    this.data2$ = this.http
      .get<RawData>('https://reqres.in/api/users?page=2')
      .pipe(
        map((response) => response.data[1].id),
        switchMap((id: number) =>
          this.http.get<SingleUser>(`https://reqres.in/api/users/${id}`)
        )
      );
  }

}

export interface RawData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: Support;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface Support {
  url: string;
  text: string;
}

export interface SingleUser {
  data: User;
  support: Support;
}