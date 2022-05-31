/// <reference path="../kenga-fields/date-field.d.ts"/>

declare module 'kenga-model-fields/model-date-field' {
  import Field from 'kenga-fields/date-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelDateField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
