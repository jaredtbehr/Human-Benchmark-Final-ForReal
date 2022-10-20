import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AimTrainLayoutComponent } from './aim-train-layout/aim-train-layout.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { NumMemLayoutComponent } from './num-mem-layout/num-mem-layout.component';
import { RtLayoutComponent } from './rt-layout/rt-layout.component';
import { SeqMemLayoutComponent } from './seq-mem-layout/seq-mem-layout.component';

// This line is purely to make github stop bothering me
const routes: Routes = [  
  {
    path:'',
    component:HomeLayoutComponent
  },
  {
    path:'Dashboard',
    component:DashboardLayoutComponent
  },
  {
    path:'Reaction-Time',
    component:RtLayoutComponent
  },
  {
    path:'Sequence-Memory',
    component:SeqMemLayoutComponent
  },
  {
    path:'Aim-Trainer',
    component:AimTrainLayoutComponent
  },
  {
    path:'Number-Memory',
    component:NumMemLayoutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
