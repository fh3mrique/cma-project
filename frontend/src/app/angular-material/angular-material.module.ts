import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    imports: [MatSidenavModule, BrowserAnimationsModule, MatListModule],
    exports: [MatSidenavModule, BrowserAnimationsModule, MatListModule]
})
export class AngularMaterialModule {

}