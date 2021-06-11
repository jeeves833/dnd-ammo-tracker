import { Component } from "@angular/core";
import { v4 as uuidv4 } from "uuid";
import { RetrievalService } from "./retrieval.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [RetrievalService],
})
export class AppComponent {
  title = "dnd-ammo-tracker-app";

  ammoIdsMap: Map<string, string> = new Map();

  constructor(private retrievalService: RetrievalService) {}

  addNewAmmoType(name: string) {
    this.ammoIdsMap.set(uuidv4(), name);
  }

  deleteModule(id: string) {
    this.ammoIdsMap.delete(id);
  }

  initiateRetrieval() {
    this.retrievalService.initiateRetrieval();
  }
}
