import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { RetrievalService } from "../retrieval.service";

@Component({
  selector: "app-ammo-module",
  templateUrl: "./ammo-module.component.html",
  styleUrls: ["./ammo-module.component.scss"],
})
export class AmmoModuleComponent implements OnInit {
  @Input() id = "";
  @Input() name = "";
  @Output() deleted = new EventEmitter<string>();

  ammoCount = 0;
  firedCount = 0;

  constructor(private retrievalService: RetrievalService) {}

  ngOnInit() {
    this.retrievalService.subscribe(this.id, this);
  }

  addAmmo() {
    this.ammoCount += 1;
  }

  removeAmmo() {
    this.ammoCount -= 1;
  }

  fire() {
    this.ammoCount -= 1;
    this.firedCount += 1;
  }

  deleteThis() {
    this.retrievalService.unsubscribe(this.id);
    this.deleted.emit(this.id);
  }

  retrieveAmmo() {
    this.ammoCount += Math.floor(this.firedCount / 2);
    this.firedCount = 0;
  }
}
