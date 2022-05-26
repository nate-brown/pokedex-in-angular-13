import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pokemon } from 'src/app/core/domain';


@Component({
	selector: 'app-pokemon-detail',
	templateUrl: './detail.component.html',
	styleUrls: [ './detail.component.scss' ]
})
export class PokemonDetailComponent implements OnInit {
	pokemon: Pokemon | undefined;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.pokemon = this.route.snapshot.data['pokemon'];
	}
}

