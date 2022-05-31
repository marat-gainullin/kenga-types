/// <reference path="../kenga-fields/email-field.d.ts"/>

declare module 'kenga-model-fields/model-email-field' {
  import Field from 'kenga-fields/email-field';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelEMailField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
