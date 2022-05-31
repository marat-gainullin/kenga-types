/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-containers/box-pane' {
  import Utils from 'kenga/utils'
  import Container from 'kenga/container'

  export default class Box extends Container {
    hgap: string | number
    vgap: string | number
    orientation: Utils.Orientation
  }
}
