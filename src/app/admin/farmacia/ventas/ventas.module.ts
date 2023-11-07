import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { VentasRoutingModule } from './ventas-routing.module';
import { VentasIndexComponent } from './ventas-index/ventas-index.component';
import { VentasNuevoComponent } from './ventas-nuevo/ventas-nuevo.component';
import { DatePipe } from '@angular/common';
import { VentasVerComponent } from './ventas-ver/ventas-ver.component';

@NgModule({
  declarations: [VentasIndexComponent, VentasNuevoComponent, VentasVerComponent],
  imports: [CommonModule, VentasRoutingModule, SharedModule],
  providers: [DatePipe],
})
export class VentasModule {}
