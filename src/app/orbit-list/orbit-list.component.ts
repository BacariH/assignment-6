import { Component, OnInit, Input} from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  // constructor() { }
  @Input() satellite: Satellite[];
  ngOnInit() {
    console.log("Satellite", this.satellite)
  }

}
