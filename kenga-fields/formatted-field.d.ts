/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/formatted-field' {
  import BoxField from 'kenga/box-field'
  import HasValue from 'kenga/has-value'

  export default class FormattedField extends BoxField implements HasValue {
    value: string
    text: string
    textChanged(): void
  }

}
