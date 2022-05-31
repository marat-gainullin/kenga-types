/// <reference path="../kenga-fields/rich-text-area.d.ts"/>

declare module 'kenga-model-fields/model-rich-text-area' {
  import Field from 'kenga-fields/rich-text-area';
  import Bound from 'kenga/bound'
  import Decorator from 'kenga/decorator'
  import Widget from 'kenga/widget'

  export default class ModelRichTextArea extends Field {
    data: any
    field: string

    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}
