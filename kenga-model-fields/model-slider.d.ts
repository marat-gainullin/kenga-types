/// <reference path="../kenga-fields/slider.d.ts"/>

declare module 'kenga-model-fields/model-slider' {
  import Field from 'kenga-fields/slider';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelSliderField extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
