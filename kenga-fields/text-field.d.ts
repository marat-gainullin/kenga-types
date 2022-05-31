/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/text-field' {
  import BoxField from 'kenga/box-field'

  export default class TextField extends BoxField {
    text: string
    value: string
    textChanged(): void
  }

}
