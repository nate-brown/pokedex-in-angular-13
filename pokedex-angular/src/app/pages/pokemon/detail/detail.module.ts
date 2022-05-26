import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PokemonDetailComponent } from './component/detail.component';
import { PokemonDetailResolver } from './resolver/pokemon.resolver';


const routes: Routes = [
	{
		path: '',
		component: PokemonDetailComponent,
		resolve: {
			pokemon: PokemonDetailResolver
		}
	}
];

@NgModule({
	declarations: [ PokemonDetailComponent ],
	imports: [ CommonModule, RouterModule.forChild(routes) ]
})
export class PokemonDetailModule {}
