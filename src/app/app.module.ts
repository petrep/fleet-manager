import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './part/menu/menu.component';
import { DataTableComponent } from './part/data-table/data-table.component';
import { DataRowComponent } from './part/data-row/data-row.component';
import { DataCellComponent } from './part/data-cell/data-cell.component';
import { ObjectArrayPipe } from './pipe/object-array.pipe';
import { HomeComponent } from './page/home/home.component';
import { DriverComponent } from './page/driver/driver.component';
import { VehicleComponent } from './page/vehicle/vehicle.component';
import { FuelingComponent } from './page/fueling/fueling.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    DataRowComponent,
    DataCellComponent,
    ObjectArrayPipe,
    HomeComponent,
    DriverComponent,
    VehicleComponent,
    FuelingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
