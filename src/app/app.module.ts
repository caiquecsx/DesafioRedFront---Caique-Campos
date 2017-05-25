import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviesPage } from '../pages/movies/movies';
import { CollectionsPage } from '../pages/collections/collections';
import { EventsPage } from '../pages/events/events';
import { NewsPage } from '../pages/news/news';
import { TvShowsPage } from '../pages/tv-shows/tv-shows';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ElasticHeaderDirective } from '../directives/elastic-header/elastic-header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviesPage,
    CollectionsPage,
    EventsPage,
    NewsPage,
    TvShowsPage,
    ElasticHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoviesPage,
    CollectionsPage,
    EventsPage,
    NewsPage,
    TvShowsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
