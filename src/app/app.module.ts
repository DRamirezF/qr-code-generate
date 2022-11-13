import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './shared/layout/header/header.component';
import { QrGeneretorComponent } from './pages/qr-generetor/qr-generetor.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { UrlComponent } from './shared/inputs/a-url/url.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { VcardsComponent } from './shared/inputs/b-vcards/vcards.component';
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
import { ButtonGenerateQrComponent } from './shared/components/microComponents/button-generate-qr/button-generate-qr.component';
import { ButtonSingUpComponent } from './shared/components/microComponents/button-sing-up/button-sing-up.component';
import { SubtitleComponent } from './shared/components/microComponents/subtitle/subtitle.component';
import { DescriptionComponent } from './shared/components/microComponents/description/description.component';
import { ScanTrackingComponent } from './shared/components/microComponents/scan-tracking/scan-tracking.component';
import { UploadFileComponent } from './shared/components/microComponents/upload-file/upload-file.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    QrGeneretorComponent,
    FooterComponent,
    UrlComponent,
    VcardsComponent,
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
    UploadFileComponent
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
