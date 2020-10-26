import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SharedMaterialModule } from '../shared-material/shared-material.module';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [CommonModule, SharedMaterialModule],
  exports: [UserDashboardComponent],
})
export class DashboardModule {}
