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
    console.log("Satellite:", this.satellite)
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    this.satellite.sort(function(a: Satellite, b: Satellite): number {
       if(a[column] < b[column]) {
          return -1;
       } else if (a[column] > b[column]) {
          return 1;
       }
       return 0;
    });
 }

 onEnter(searchTerm: string): void {
   console.log(searchTerm);
 }
}
