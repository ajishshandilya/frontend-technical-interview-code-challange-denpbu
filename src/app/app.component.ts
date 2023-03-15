import { Component } from '@angular/core';
import { animals } from './animals';
import { Animal } from './animal';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  animals = animals;
  ngOnInit() {
    console.log(animals);
  }

  constructor(private animal: Animal) {}

  sortBy(sort) {
    console.log(sort);
    console.log(Object.keys(this.animal));
  }

  filterByAnimalType(animalType: string) {
    console.log(animalType);
  }

  groupByAnimalType(): void {}
}
