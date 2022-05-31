/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/color-field' {
  import BoxField from 'kenga/box-field'

  export default class ColorField extends BoxField {
    text: string
    value: any
    textChanged(): void

    format: (value: any) => string
    parse: (text: string) => any

    checkValidity: () => boolean
  }

}
