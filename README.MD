# ngl-grid

## Installation

To install this library, run:

```bash
//still dev in progress
//$ npm install ngl-grid --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
//still dev in progress
$ npm install ngl-grid
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NGLGridModule } from 'ngl-grid';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NGLGridModule.forroot(),
    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<ngl-grid></ngl-grid>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [lucy@ilucy.in](mailto:lucy@ilucy.in)
