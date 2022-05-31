/// <reference path="../kenga-fields/password-field.d.ts"/>

declare module 'kenga-model-fields/model-password-field' {
  import Field from 'kenga-fields/password-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelPasswordField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
