/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/date-time-field' {
  import BoxField from 'kenga/box-field'
  import HasValue from 'kenga/has-value'

  export default class DateTimeField extends BoxField implements HasValue {
    checkValidity: () => boolean

    value: Date
    text: string
    textChanged(): void
  }

}
