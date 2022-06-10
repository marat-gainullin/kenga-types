/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/number-field' {
  import ConstraintField from 'kenga-fields/constraint-field'
  import HasValue from 'kenga/has-value'

  export default class NumberField extends ConstraintField implements HasValue {
    value: number
    text: string
    textChanged(): void

    checkValidity: () => boolean
  }

}
