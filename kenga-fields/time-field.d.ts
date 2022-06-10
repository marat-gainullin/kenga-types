/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/time-field' {
  import BoxField from 'kenga/box-field'
  import HasValue from 'kenga/has-value'

  export default class TimeField extends BoxField implements HasValue {
    value: number
    text: string
    textChanged(): void
    checkValidity: () => boolean
    parse: (text: string) => number
    format: (value: number) => string
  }
}
