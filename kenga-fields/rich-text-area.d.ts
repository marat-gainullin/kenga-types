/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/rich-text-area' {
  import Widget from 'kenga/widget'
  import ValueChangeEvent from 'kenga/events/value-change-event'

  export default class RichTextArea extends Widget {
    text: string
    value: string
    fireValueChanged(): void
    addValueChangeHandler(handler: (evt: ValueChangeEvent) => void): { removeHandler: () => void }
  }

}
