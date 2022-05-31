/// <reference path="../kenga-fields/number-field.d.ts"/>

declare module 'kenga-model-fields/model-number-field' {
  import Field from 'kenga-fields/number-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelNumberField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
