import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ModalModule } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']

})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  detailModal: ModalModule;
  modalRef: BsModalRef;

  constructor(private recipeService: RecipeService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  AddRecipes() {

  }
}
