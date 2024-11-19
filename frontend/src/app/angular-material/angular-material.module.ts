import { NgModule } from "@angular/core";
import { FlatTreeControl } from '@angular/cdk/tree';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        MatListModule,
        MatTreeModule,
        MatIconModule

    ],
    exports: [MatSidenavModule, BrowserAnimationsModule, MatListModule, MatTreeModule, MatIconModule]
})
export class AngularMaterialModule {

}