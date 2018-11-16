import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [WelcomeComponent, CurrentTrainingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class TrainingModule { }
