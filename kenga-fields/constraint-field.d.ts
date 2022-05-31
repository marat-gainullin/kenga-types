/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/constraint-field' {
  import BoxField from 'kenga/box-field'

  export default class ConstraintField extends BoxField {
    minimum: number
    maximum: number
    step: number
  }

}
