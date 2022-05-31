/// <reference path="../kenga-fields/formatted-field.d.ts"/>

declare module 'kenga-model-fields/model-formatted-field' {
  import Field from 'kenga-fields/formatted-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelFormattedField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
