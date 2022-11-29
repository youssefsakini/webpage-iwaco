import { Component, Input, OnInit } from '@angular/core';
import { Collapse } from 'src/app/Type/collapse';

@Component({
  selector: 'app-collapse-section',
  templateUrl: './collapse-section.component.html',
  styleUrls: ['./collapse-section.component.scss']
})
export class CollapseSectionComponent implements OnInit {
  @Input() collapse!: Collapse[]; 
  constructor() { }

  ngOnInit(): void {
  }

}
