/// <reference path="./constraint-field.d.ts"/>

declare module 'kenga-fields/progress-field' {
  import ConstraintField from 'kenga-fields/constraint-field'

  export default class ProgressField extends ConstraintField {
    text: string
    value: number
    textChanged(): void
  }

}
