import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a simply test', 'https://get.pxhere.com/photo/omelet-dish-food-cuisine-ingredient-produce-meal-vegetarian-food-frittata-comfort-food-recipe-quiche-vegetable-vegan-nutrition-cookware-and-bakeware-brunch-garnish-curry-Bobotie-1620847.jpg'),
    new Recipe('A test recipe', 'This is a simply test', 'https://get.pxhere.com/photo/omelet-dish-food-cuisine-ingredient-produce-meal-vegetarian-food-frittata-comfort-food-recipe-quiche-vegetable-vegan-nutrition-cookware-and-bakeware-brunch-garnish-curry-Bobotie-1620847.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
