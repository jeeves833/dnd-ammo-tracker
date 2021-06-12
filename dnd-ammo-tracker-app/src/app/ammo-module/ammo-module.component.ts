import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { RetrievalService } from "../retrieval.service";
import { AmmoService } from "../ammo.service";

@Component({
  selector: "app-ammo-module",
  templateUrl: "./ammo-module.component.html",
  styleUrls: ["./ammo-module.component.scss"],
})
export class AmmoModuleComponent implements OnInit {
  @Input() id = "";
  @Input() name = "";
  @Output() deleted = new EventEmitter<string>();

  state: AmmoModuleState = {
    ammoCount: 0,
    firedCount: 0,
    selectedRetrievalMode: 0,
  };

  retrievalOptions = [
    "Retrieve All",
    "Retrieve Half Rounded Down",
    "Retrieve Half Rounded Up",
  ];

  constructor(
    private retrievalService: RetrievalService,
    private ammoService: AmmoService
  ) {}

  ngOnInit() {
    this.retrievalService.subscribe(this.id, this);
    this.state = this.ammoService.ammoModuleStates.get(this.id)!;
  }

  addAmmo() {
    this.state.ammoCount += 1;
  }

  removeAmmo() {
    this.state.ammoCount -= 1;
  }

  fire() {
    this.state.ammoCount -= 1;
    this.state.firedCount += 1;
  }

  deleteThis() {
    this.retrievalService.unsubscribe(this.id);
    this.deleted.emit(this.id);
  }

  retrieveAmmo() {
    if (this.state.selectedRetrievalMode == 0) {
      this.state.ammoCount += this.state.firedCount;
    } else if (this.state.selectedRetrievalMode == 1) {
      this.state.ammoCount += Math.floor(this.state.firedCount / 2);
    } else if (this.state.selectedRetrievalMode == 2) {
      this.state.ammoCount += Math.ceil(this.state.firedCount / 2);
    }
    this.state.firedCount = 0;
  }
}

export interface AmmoModuleState {
  ammoCount: number;
  firedCount: number;
  selectedRetrievalMode: number;
}
