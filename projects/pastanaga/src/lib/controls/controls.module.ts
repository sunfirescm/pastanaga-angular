import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SvgModule } from '../svg/module';
import { CheckboxExpandableComponent } from './checkbox-expandable/checkbox-expandable.component';
import { BadgeModule } from '../badge/badge.module';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { ButtonModule } from '../button/button.module';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleGroupComponent } from './toggle-group/toggle-group.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        TranslateModule,
        BadgeModule,
        ButtonModule,
        SvgModule,
    ],
    declarations: [
        CheckboxComponent,
        CheckboxExpandableComponent,
        CheckboxGroupComponent,
        ToggleComponent,
        ToggleGroupComponent,
    ],
    exports: [
        CheckboxComponent,
        CheckboxExpandableComponent,
        CheckboxGroupComponent,
        ToggleComponent,
        ToggleGroupComponent,
    ]
})
export class ControlsModule {
}
