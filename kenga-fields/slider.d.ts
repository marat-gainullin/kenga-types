/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/slider' {
  import ConstraintField from 'kenga-fields/constraint-field'
  import HasValue from 'kenga/has-value'

  export default class RangeField extends ConstraintField implements HasValue {
    value: number
    text: string
    textChanged(): void
    checkValidity: () => boolean
  }

}
