import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';

// module - provide way to package components and share those components in orginazed comonents,
// allow lazy loading.
// creating components under Module, allow to use component only under the father module.
// To share component from Module, firstly add export fieldl under @NgModule, second import in the component wanted the module in the Imports field

// entryComponents and providers.
@NgModule({
  declarations: [
    FooComponent
  ],
  exports: [
    FooComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CoolModule { }
