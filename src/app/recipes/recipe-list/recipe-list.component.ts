import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent  implements OnInit{
  testing = 'Testing'
  recipes:Recipe[] = [
    new Recipe('testing name', 'testing description', 'https://assets.epicurious.com/photos/5cb8bdff8ef0813c45b65970/16:9/w_1920,c_limit/SUNDAY-STASH-APRIL-Pancake-Mix-process-1-100419.jpg')
  ]
  constructor() {

  }
  ngOnInit() {

  }
  }
