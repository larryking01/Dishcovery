import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { Footer } from '../../shared/components/footer/footer';


@Component({
  selector: 'app-home-list-recipes',
  imports: [ Navbar, Footer],
  templateUrl: './home-list-recipes.html',
  styleUrl: './home-list-recipes.scss'
})
export class HomeListRecipes {

}
