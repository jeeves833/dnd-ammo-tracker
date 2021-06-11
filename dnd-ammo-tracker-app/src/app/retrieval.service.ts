import { Injectable } from "@angular/core";
import { AmmoModuleComponent } from "./ammo-module/ammo-module.component";

@Injectable({
  providedIn: "root",
})
export class RetrievalService {
  idRetrievalMap: Map<string, AmmoModuleComponent> = new Map();

  constructor() {}

  initiateRetrieval() {
    for (var ammoModule of this.idRetrievalMap.values()) {
      ammoModule.retrieveAmmo();
    }
  }

  subscribe(id: string, ammoModule: AmmoModuleComponent) {
    this.idRetrievalMap.set(id, ammoModule);
    console.log(this.idRetrievalMap.keys());
  }

  unsubscribe(id: string) {
    this.idRetrievalMap.delete(id);
  }
}
