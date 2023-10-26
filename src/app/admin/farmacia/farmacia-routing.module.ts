import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'venta',
    loadChildren: () =>
      import('./ventas/ventas.module').then((m) => m.VentasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmaciaRoutingModule { }
