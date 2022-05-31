/// <reference path="../kenga-fields/time-field.d.ts"/>

declare module 'kenga-model-fields/model-time-field' {
  import Field from 'kenga-fields/time-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelTimeField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
