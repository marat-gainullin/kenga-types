/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/slider' {
  import ConstraintField from 'kenga-fields/constraint-field'

  export default class RangeField extends ConstraintField {
    text: string
    value: number
    textChanged(): void
    checkValidity: () => boolean
  }

}
