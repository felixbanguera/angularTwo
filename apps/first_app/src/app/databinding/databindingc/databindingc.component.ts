import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databindingc',
  templateUrl: './databindingc.component.html',
  styleUrls: ['./databindingc.component.css']
})
export class DatabindingcComponent implements OnInit {
  iterpolation_test: string = "DatabindingcComponent constructor"
  numerito: number = 77
  model: {nombre: 'felixito'}
  constructor() {  }

  ngOnInit() {
  }

  testClick(){
    alert("testing event binding!!");
  }

  bindTestEvent(arg: string){
    alert("Binded in databindingCC:"+arg);
  }
}
