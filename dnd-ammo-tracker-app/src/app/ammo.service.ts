import { Injectable } from "@angular/core";
import { AmmoModuleState } from "./ammo-module/ammo-module.component";

@Injectable({
  providedIn: "root",
})
export class AmmoService {
  ammoModuleStates: Map<string, AmmoModuleState> = new Map();

  constructor() {}

  registerId(id: string) {
    this.ammoModuleStates.set(id, {
      ammoCount: 0,
      firedCount: 0,
      selectedRetrievalMode: 0,
    });
  }

  unregisterId(id: string) {
    this.ammoModuleStates.delete(id);
  }
}
