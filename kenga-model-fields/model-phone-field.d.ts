/// <reference path="../kenga-fields/phone-field.d.ts"/>

declare module 'kenga-model-fields/model-phone-field' {
  import Field from 'kenga-fields/phone-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelPhoneField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
