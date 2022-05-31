/// <reference path="../kenga-buttons/check-box.d.ts"/>

declare module 'kenga-model-buttons/model-check-box' {
  import CheckBox from 'kenga-buttons/check-box';
  import Bound from 'kenga/bound'

  export default class ModelCheckBox extends CheckBox implements Bound {
    data: any
    field: string
  }
}
