/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-containers/flow-pane' {
  import Container from 'kenga/container'

  export default class Flow extends Container {
    hgap: number | string
    vgap: number | string
  }
}
