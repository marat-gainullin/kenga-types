/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-containers/scroll-pane' {
  import Utils from 'kenga/utils'
  import Widget from 'kenga/widget'
  import Container from 'kenga/container'

  export default class Scroll extends Container {
    horizontalScrollBarPolicy: Utils.ScrollBarPolicy
    verticalScrollBarPolicy: Utils.ScrollBarPolicy
    view: Widget
  }
}
