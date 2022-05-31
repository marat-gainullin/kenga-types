/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-containers/horizontal-box-pane' {
  import Utils from 'kenga/utils'
  import Container from 'kenga/container'

  export default class HBox extends Container {
    hgap: number | string
    vgap: number | string
    align: Utils.VerticalAlign
  }
}
