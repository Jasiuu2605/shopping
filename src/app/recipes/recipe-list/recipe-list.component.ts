import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'this is simply a test',
      'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
    ),
    new Recipe(
      'A second test recipe',
      'this is simply a test of second recipe',
      'https://img.delicious.com.au/fVd1u6k7/w1200/del/2022/02/chicken-chickpea-curry-163942-1.jpg'
    ),
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  };
}
