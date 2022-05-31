/// <reference path="../kenga-fields/date-time-field.d.ts"/>

declare module 'kenga-model-fields/model-date-time-field' {
  import Field from 'kenga-fields/date-time-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelDateTimeField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
