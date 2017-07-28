import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule,
  MdProgressBarModule, MdInputModule,
  MdAutocompleteModule, MdToolbarModule,
  MdListModule, MdTabsModule
} from '@angular/material';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdInputModule,
    MdAutocompleteModule,
    MdToolbarModule,
    MdListModule,
    MdTabsModule
  ],
  imports: [
  ],
  declarations: []
})
export class MaterialModule { }
