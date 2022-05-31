/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/number-field' {
  import ConstraintField from 'kenga-fields/constraint-field'

  export default class NumberField extends ConstraintField {
    text: string
    value: number
    textChanged(): void
    checkValidity: () => boolean
  }

}
