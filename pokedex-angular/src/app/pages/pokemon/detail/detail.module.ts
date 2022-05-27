import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared';
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
    declarations: [PokemonDetailComponent],
    imports: [SharedModule, RouterModule.forChild(routes)]
})
export class PokemonDetailModule {}
