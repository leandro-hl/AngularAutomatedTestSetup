import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.less']
})
export class InputOutputComponent implements OnInit {
  @Input()
  label = '';

  @Input()
  isReadOnly = false;

  @Input()
  text = '';

  @Output()
  textChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  bubbleChange(val) {
    this.textChange.emit(val.target.value);
  }
}
