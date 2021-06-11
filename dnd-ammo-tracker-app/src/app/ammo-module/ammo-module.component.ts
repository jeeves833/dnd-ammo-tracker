import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-ammo-module",
  templateUrl: "./ammo-module.component.html",
  styleUrls: ["./ammo-module.component.scss"],
})
export class AmmoModuleComponent {
  @Input() id = "";
  @Input() name = "";
  @Output() deleted = new EventEmitter<string>();

  ammoCount = 0;
  firedCount = 0;

  constructor() {}

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
    this.deleted.emit(this.id);
  }

  retrieveAmmo() {
    this.ammoCount += this.firedCount / 2;
  }
}
