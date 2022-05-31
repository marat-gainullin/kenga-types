/// <reference path="../kenga-fields/progress-field.d.ts"/>

declare module 'kenga-model-fields/model-progress-field' {
  import Field from 'kenga-fields/progress-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelProgressField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
