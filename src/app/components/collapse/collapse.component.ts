import { Component, Input, OnInit } from '@angular/core';
import { Collapse } from 'src/app/Type/collapse';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
@Input() collapse!: Collapse; 
  constructor() { }

  ngOnInit(): void {
  }

}
