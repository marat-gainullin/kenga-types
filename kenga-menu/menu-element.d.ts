/// <reference path="../kenga/index.d.ts"/>

declare module "kenga-menu/menu-element" {
  import Widget from 'kenga/widget'

  export default class MenuElement extends Widget {
    subMenu: Widget
  }
}
