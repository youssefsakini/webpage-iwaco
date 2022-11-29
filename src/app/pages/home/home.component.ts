import { Component, OnInit } from '@angular/core';
import { Collapse } from 'src/app/Type/collapse';
// import { Collapse } from 'src/app/Type/collapse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  collapse: Collapse[] = [
    {
      id: 1,
      title: 'Leadership',
      paragraph:
        'We are the reference for our custumers, our partners and the Moroccan market for distibution. to maintain our leading position, it requires motivation, vision, innovation and integrity.',
    },
    {
      id: 2,
      title: 'Commitment',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 3,
      title: 'Excellence',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 4,
      title: 'Loyalty',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 5,
      title: 'Solidarity',
      paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
