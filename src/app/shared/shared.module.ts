import { NgModule } from '@angular/core';
// Shared Modules
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// UI
import {
  MdAutocompleteModule,
  MdCheckboxModule,
  MdInputModule,
  MdRadioModule,
  MdSelectionModule,
  MdSelectModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdMenuModule,
  MdSidenavModule,
  MdToolbarModule,
  MdListModule,
  MdGridListModule,
  MdCardModule,
  MdTabsModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdChipsModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdDialogModule,
  MdTooltipModule,
  MdSnackBarModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

// Custom Modules

// Directives
import { HighlightDirective } from '../directives/highlight.directive.spec';

@NgModule({
  imports: [
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectionModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule
  ],
  exports: [
    MdAutocompleteModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectionModule,
    MdSelectModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdMenuModule,
    MdSidenavModule,
    MdToolbarModule,
    MdListModule,
    MdGridListModule,
    MdCardModule,
    MdTabsModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdChipsModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdTooltipModule,
    MdSnackBarModule
  ]
})
export class SharedMaterialModule { }

@NgModule({
  declarations: [ HighlightDirective ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    SharedMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    SharedMaterialModule,
    FlexLayoutModule,
    HighlightDirective
  ]
})
export class SharedModule { }
