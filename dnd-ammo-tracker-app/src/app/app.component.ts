import { Component } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { RetrievalService } from "./retrieval.service";
import { AmmoService } from "./ammo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [RetrievalService, AmmoService],
})
export class AppComponent {
  title = "dnd-ammo-tracker-app";

  ammoIdsMap: Map<string, string> = new Map();

  constructor(
    private retrievalService: RetrievalService,
    private ammoService: AmmoService
  ) {}

  addNewAmmoType(name: string) {
    const id = uuidv4();
    this.ammoService.registerId(id);
    this.ammoIdsMap.set(id, name);
  }

  deleteModule(id: string) {
    this.ammoService.unregisterId(id);
    this.ammoIdsMap.delete(id);
  }

  initiateRetrieval() {
    this.retrievalService.initiateRetrieval();
  }
}
