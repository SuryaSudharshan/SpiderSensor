import { Component, OnInit } from '@angular/core';
import * as SampleSensorTableData from 'assets/sampletabledata.json';
import * as _ from 'lodash';

@Component({
  selector: 'app-mysensors',
  templateUrl: './mysensors.component.html',
  styleUrls: ['./mysensors.component.css']
})
export class MysensorsComponent implements OnInit {
  public tableData: any = [];
  public selectedBuilding;
  public buildings = [];
  public selectedFloor;
  public floors = [];
  public data = [];
  constructor() {
    
  }

  ngOnInit() {
    _.forEach((SampleSensorTableData as any), (val) => {
      this.buildings.push(val.name);
    });
    this.data= SampleSensorTableData as any;
    this.selectedBuilding = this.buildings[0];
    this.buildingChanged();
    this.selectedFloor = this.floors[0];
    this.tableData=this.data[0].floordata[0].values
  }

  public buildingChanged() {
    this.floors = [];
    this.tableData= [];
    const building = _.find((this.data as any), (val) => val.name === this.selectedBuilding);
    _.forEach(building.floordata, (val) => {
      this.floors.push(val.name);
    });
  }

  public floorChanged() {
    this.tableData= [];
    const building = _.find((this.data as any), (val)=> val.name === this.selectedBuilding);
    const floor = _.find((building.floordata as any), (val)=> val.name === this.selectedFloor);
    this.tableData = floor.values;
  }

}
