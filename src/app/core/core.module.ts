import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../common/components/header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})

export class CoreModule { 
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
        }
    }
}
