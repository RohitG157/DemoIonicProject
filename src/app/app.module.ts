import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { BaseService } from './common/services/base.service';
import { AuthService } from './common/services/auth.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    entryComponents: [],
    imports: [
        BrowserModule, 
        IonicModule.forRoot(), 
        HttpClientModule, 
        AppRoutingModule, 
        CoreModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
        BaseService,
        AuthService,
        HTTP
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
