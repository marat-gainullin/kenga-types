/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/time-field' {
  import BoxField from 'kenga/box-field'

  export default class TimeField extends BoxField {
    text: string
    value: number
    textChanged(): void
    checkValidity: () => boolean
    parse: (text: string) => number
    format: (value: number) => string
  }
}
