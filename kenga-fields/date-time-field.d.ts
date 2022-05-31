/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/date-time-field' {
  import BoxField from 'kenga/box-field'

  export default class DateTimeField extends BoxField {
    checkValidity: () => boolean

    text: string
    value: Date
    textChanged(): void
  }

}
