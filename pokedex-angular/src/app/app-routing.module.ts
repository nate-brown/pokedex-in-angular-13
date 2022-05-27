import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () =>
            import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'pokemon/:id',
        loadChildren: () =>
            import('./pages/pokemon/detail/detail.module').then(
                (m) => m.PokemonDetailModule
            )
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
