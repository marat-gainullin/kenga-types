/// <reference path="../kenga/index.d.ts"/>
/// <reference path="./menu-element.d.ts"/>

declare module "kenga-menu/menu-item" {
  import Utils from 'kenga/utils'
  import ActionEvent from 'kenga/events/action-event'
  import MenuElement from 'kenga-menu/menu-element'

  export default class MenuItem extends MenuElement {
    constructor(text: string, icon: string | HTMLElement, onAction: (evt: ActionEvent) => void)

    onAction: (evt: ActionEvent) => void
    text: string
    icon: string | HTMLElement
    iconTextGap: number | string
    horizontalTextPosition: Utils.HorizontalPosition
  }
}
