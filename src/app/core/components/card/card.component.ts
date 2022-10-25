import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() photo: Photo | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
