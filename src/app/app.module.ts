import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { QrGeneretorComponent } from './shared/components/big-components/qr-generetor/qr-generetor.component';
import { UrlComponent } from './shared/inputs/a-url/url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { VcardComponent } from './shared/inputs/b-vcard/vcard.component';
import { TextComponent } from './shared/inputs/c-text/text.component';
import { EMailComponent } from './shared/inputs/d-e-mail/e-mail.component';
import { SmsComponent } from './shared/inputs/e-sms/sms.component';
import { WifiComponent } from './shared/inputs/f-wifi/wifi.component';
import { BitcoinComponent } from './shared/inputs/g-bitcoin/bitcoin.component';
import { TwitterComponent } from './shared/inputs/h-twitter/twitter.component';
import { FacebookComponent } from './shared/inputs/i-facebook/facebook.component';
import { PdfComponent } from './shared/inputs/j-pdf/pdf.component';
import { Mp3Component } from './shared/inputs/k-mp3/mp3.component';
import { AppStoresComponent } from './shared/inputs/l-app-stores/app-stores.component';
import { ImagesComponent } from './shared/inputs/m-images/images.component';
import { ButtonGenerateQrComponent } from './shared/components/micro-components/button-generate-qr/button-generate-qr.component';
import { ButtonSingUpComponent } from './shared/components/micro-components/button-sing-up/button-sing-up.component';
import { SubtitleComponent } from './shared/components/micro-components/subtitle/subtitle.component';
import { DescriptionComponent } from './shared/components/micro-components/description/description.component';
import { ScanTrackingComponent } from './shared/components/micro-components/scan-tracking/scan-tracking.component';
import { UploadFileComponent } from './shared/components/micro-components/upload-file/upload-file.component';
import { QrIlustrationComponent } from './shared/components/big-components/qr-ilustration/qr-ilustration.component';
import { AccordionComponent } from './shared/layout/accordion/accordion.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrGeneretorComponent,
    UrlComponent,
    VcardComponent,
    TextComponent,
    EMailComponent,
    SmsComponent,
    WifiComponent,
    BitcoinComponent,
    TwitterComponent,
    FacebookComponent,
    PdfComponent,
    Mp3Component,
    AppStoresComponent,
    ImagesComponent,
    ButtonGenerateQrComponent,
    ButtonSingUpComponent,
    SubtitleComponent,
    DescriptionComponent,
    ScanTrackingComponent,
    UploadFileComponent,
    QrIlustrationComponent,
    AccordionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
