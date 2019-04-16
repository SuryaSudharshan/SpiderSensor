import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MysensorsComponent } from './mysensors/mysensors.component'
import { SpiderSensorComponent } from 'app/spider-sensor/spider-sensor.component';
import { DashboardRenderComponent } from 'app/dashboard-render/dashboard-render.component';
import { SetAlarmComponent } from 'app/set-alarm/set-alarm.component';
import { AddSensorComponent } from 'app/add-sensor/add-sensor.component';
import { AddGatewayComponent } from 'app/add-gateway/add-gateway.component';

export const AppRoutes: Routes = [
    {
        path: '',
        component: SpiderSensorComponent,
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    {
        path: 'mysensors',
        component: MysensorsComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'set-alarm',
        component: SetAlarmComponent
    },
    {
        path: 'add-sensor',
        component: AddSensorComponent
    },
    {
        path: 'add-gateway',
        component: AddGatewayComponent
    },
    {
        path: 'dashboard-render',
        component: DashboardRenderComponent
    },
]
