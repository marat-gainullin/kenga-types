/// <reference path="./button.d.ts"/>
/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-buttons/check-box' {
  import Button from 'kenga-buttons/button'
  import Widget from 'kenga/widget'

  export default class DropDownButton extends Button {
    dropDownMenu: Widget
    showDropDownMenu: () => void
  }
}
