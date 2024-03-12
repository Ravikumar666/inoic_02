import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor() {}

  private recipes: Recipe[] = [
    {
      id: '23',
      title: 'Apple',
      imgURL: 'https://spoonacular.com/cdn/ingredients_100x100/apple.jpg',
      benifites: ['Fruit', 'reduce Health issues', 'Eat daily one Apple'],
    },
    {
      id: '21',
      title: 'Cake',
      imgURL: 'https://spoonacular.com/recipeImages/579247-556x370.jpg',
      benifites: [
        'Backary Item',
        'included with some of creams',
        'Not good for Health',
      ],
    },
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRicipe(recipeId: string | null = '') {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id === recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string | null = '') {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
