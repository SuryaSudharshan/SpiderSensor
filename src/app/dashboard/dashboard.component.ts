import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    ngOnInit(){
        var dataSales = {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun',],
          series: [
             [15,10,30,22,40,50,30],
            [22,28,18,11,7,30,15],
            [20,30,10,40,50,25,40]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 100,
          showArea: false,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: true,
        };

        var responsiveSales: any[] = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Bar('#chartHours', dataSales, optionsSales, responsiveSales);
        new Chartist.Line('#chartHours1', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
          series: [
            [22,12,30,35,10,5,40],
            [30,34,36,38,44,45,30]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false,
            },
            height: "245px"
        };

        var responsiveOptions: any[] = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        new Chartist.Line('#chartActivity', data, options, responsiveOptions);
        new Chartist.Line('#chartActivity1', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };

        // new Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);

        // new Chartist.Pie('#chartPreferences', {
        //   labels: ['62%','32%','6%'],
        //   series: [62, 32, 6]
        // });
    }
}
