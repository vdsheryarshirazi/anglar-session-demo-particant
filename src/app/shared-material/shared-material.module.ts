import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatIconModule, MatListModule],
  exports: [CommonModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatIconModule, MatListModule],
})
export class SharedMaterialModule {}
