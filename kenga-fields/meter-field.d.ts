/// <reference path="./progress-field.d.ts"/>

declare module 'kenga-fields/meter-field' {
  import ProgressField from 'kenga-fields/progress-field'

  export default class MeterField extends ProgressField {
    low: number
    high: number
    optimum: number
  }

}
