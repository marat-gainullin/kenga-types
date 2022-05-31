/// <reference path="../kenga-fields/color-field.d.ts"/>

declare module 'kenga-model-fields/model-color-field' {
  import Field from 'kenga-fields/color-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelColorField extends Field implements Bound, Decorator{
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
