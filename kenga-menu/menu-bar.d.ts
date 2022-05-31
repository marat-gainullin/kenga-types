/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-containers/menu-bar' {
  import Container from 'kenga/container'

  export default class MenuBar extends Container {
    close(): void
  }
}
