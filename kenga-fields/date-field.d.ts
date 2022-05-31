/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/date-field' {
  import BoxField from 'kenga/box-field'

  export default class DateField extends BoxField {
    checkValidity: () => boolean

    textChanged(): void
    text: string
    value: Date
  }

}
