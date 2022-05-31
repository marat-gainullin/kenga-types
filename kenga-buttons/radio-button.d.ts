/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-buttons/radio-button' {
  import Widget from 'kenga/widget'
  import ValueChangeEvent from 'kenga/events/value-change-event'
  import Utils from 'kenga/utils'

  export default class RadioButton extends Widget {
    text: string
    /**
     * Horizontal position of the text relative to the icon.
     */
    horizontalTextPosition: Utils.HorizontalPosition
    selected: boolean
    value: boolean
    buttonGroup: Widget
    addValueChangeHandler: (handler: (evt: ValueChangeEvent) => void) => { removeHandler: () => void }
  }
}
