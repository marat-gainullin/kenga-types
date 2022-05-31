/// <reference path="../kenga-fields/url-field.d.ts"/>

declare module 'kenga-model-fields/model-url-field' {
  import Field from 'kenga-fields/url-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelUrlField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
