import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomePage implements OnInit {
  public buttonDisabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeSearch(e:KeyboardEvent): void{
    this.buttonDisabled = !(((e.target as HTMLInputElement).value.length) as unknown as boolean);
  }
}
