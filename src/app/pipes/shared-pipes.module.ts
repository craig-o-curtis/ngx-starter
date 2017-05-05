import { NgModule } from '@angular/core';

import { InitCapsPipe } from './init-caps.pipe';
import { PluralizePipe } from './pluralize.pipe';

@NgModule({
  declarations: [ InitCapsPipe, PluralizePipe ],
  exports: [ InitCapsPipe, PluralizePipe ]
})
export class SharedPipesModule { }
