import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-llaju',
  templateUrl: './llaju.component.html',
  styleUrls: ['./llaju.component.css']
})
export class LlajuComponent implements OnInit {
  @Input() testData = 10; 
  @Output() testEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  triggerTestEvent(arg: string){
    this.testEvent.emit(arg);
  } 

}
