import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { KeyFilterModule } from 'primeng/keyfilter';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SelectButtonModule,
    ButtonModule,
    FormsModule,
    PdfViewerModule,
    KeyFilterModule,
    NgxExtendedPdfViewerModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
