/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/progress-field' {
  import ConstraintField from 'kenga-fields/constraint-field'
  import HasValue from 'kenga/has-value'

  export default class ProgressField extends ConstraintField implements HasValue {
    value: number
    text: string
    textChanged(): void
  }

}
