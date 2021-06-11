import { Component } from "@angular/core";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "dnd-ammo-tracker-app";

  ammoIds: Set<string> = new Set();

  addNewAmmoType() {
    this.ammoIds.add(uuidv4());
  }

  deleteModule(id: string) {
    this.ammoIds.delete(id);
  }
}
