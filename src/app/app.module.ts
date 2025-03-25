import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './share/share.module';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ShareModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
  ],
})
export class AppModule { }
