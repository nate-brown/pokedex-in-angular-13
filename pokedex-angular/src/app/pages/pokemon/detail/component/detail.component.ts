import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/core/domain';

@Component({
    selector: 'app-pokemon-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
    pokemon: Pokemon;

    constructor(private route: ActivatedRoute) {
        this.pokemon = this.route.snapshot.data['pokemon'];
    }

    ngOnInit() {
    }
}
