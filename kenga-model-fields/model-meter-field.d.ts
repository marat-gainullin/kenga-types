/// <reference path="../kenga-fields/meter-field.d.ts"/>

declare module 'kenga-model-fields/model-meter-field' {
  import Field from 'kenga-fields/meter-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelMeterField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
