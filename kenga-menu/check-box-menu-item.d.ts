/// <reference path="../kenga/index.d.ts"/>
/// <reference path="./boolean-menu-item.d.ts"/>

declare module "kenga-menu/check-box-menu-item" {
  import ActionEvent from 'kenga/events/action-event'
  import BooleanMenuItem from 'kenga-menu/boolean-menu-item'

  export default class CheckMenuItem extends BooleanMenuItem {
    constructor(text: string, selected: boolean, onAction: (evt: ActionEvent) => void)
  }
}
