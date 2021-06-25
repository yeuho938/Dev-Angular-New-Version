import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {

  constructor() { }
  listItem = [
      {text: 'There are many variations of passages of Lorem Ipsum available, ' +
              'but the majority have suffered alteration in some form. There are many variations of passages.',
      name: 'JONATHON JORDAN'},
      {text: 'There are many variations of passages of Lorem Ipsum available, ' +
              'but the majority have suffered alteration in some form. There are many variations of passages.',
          name: 'MICHELLE MITCHELL',
      },
      {text: 'There are many variations of passages of Lorem Ipsum available, ' +
              'but the majority have suffered alteration in some form. There are many variations of passages.',
          name: 'MAX MITCHELL'}
  ];
  ngOnInit() {
  }

}
