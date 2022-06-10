/// <reference path="./button.d.ts"/>
/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-buttons/toggle-button' {
  import Button from 'kenga-buttons/button'
  import ValueChangeEvent from 'kenga/events/value-change-event'
  import Widget from 'kenga/widget'
  import HasValue from 'kenga/has-value'

  export default class ToggleButton extends Button implements HasValue {
    selected: boolean
    value: boolean
    buttonGroup: Widget
    addValueChangeHandler: (handler: (evt: ValueChangeEvent) => void) => { removeHandler: () => void }
    fireValueChanged(): void
  }
}
