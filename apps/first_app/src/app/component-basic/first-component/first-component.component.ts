import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
    <p>
      first-component Works!
      FELIXXX!!!
    </p>
  `,
  styles: [`p{color:red;}`]
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
