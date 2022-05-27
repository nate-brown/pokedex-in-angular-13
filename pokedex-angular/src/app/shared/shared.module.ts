import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [CommonModule, RouterModule, MatGridListModule, MatCardModule, MatChipsModule]
})
export class SharedModule {}
