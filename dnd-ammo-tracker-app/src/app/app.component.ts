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

  ammoIds: Set<string> = new Set();

  constructor(private retrievalService: RetrievalService) {}

  addNewAmmoType() {
    this.ammoIds.add(uuidv4());
  }

  deleteModule(id: string) {
    this.ammoIds.delete(id);
  }

  initiateRetrieval() {
    this.retrievalService.initiateRetrieval();
  }
}
