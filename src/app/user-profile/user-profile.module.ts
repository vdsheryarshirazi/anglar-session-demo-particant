import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateProfileFormComponent } from './update-profile-form/update-profile-form.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UpdateProfileFormComponent],

  imports: [CommonModule, SharedMaterialModule, ReactiveFormsModule],
  exports: [UpdateProfileFormComponent],
})
export class UserProfileModule {}
