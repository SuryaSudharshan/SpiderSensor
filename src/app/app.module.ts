import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import {FormsModule} from '@angular/forms';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { MysensorsComponent } from './mysensors/mysensors.component';
import { SpiderSensorComponent } from './spider-sensor/spider-sensor.component';
import { DashboardRenderComponent } from './dashboard-render/dashboard-render.component';
import { AddGatewayComponent } from './add-gateway/add-gateway.component';
import { SetAlarmComponent } from './set-alarm/set-alarm.component';
import { AddSensorComponent } from './add-sensor/add-sensor.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    MysensorsComponent,
    SpiderSensorComponent,
    DashboardRenderComponent,
    AddGatewayComponent,
    SetAlarmComponent,
    AddSensorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
