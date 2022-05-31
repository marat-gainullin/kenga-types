/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/formatted-field' {
  import BoxField from 'kenga/box-field'

  export default class FormattedField extends BoxField {
    text: string
    value: string
    textChanged(): void
  }

}
