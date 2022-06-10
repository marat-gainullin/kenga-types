/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/date-field' {
  import BoxField from 'kenga/box-field'
  import HasValue from 'kenga/has-value'

  export default class DateField extends BoxField implements HasValue {
    checkValidity: () => boolean

    value: Date
    text: string
    textChanged(): void
  }

}
