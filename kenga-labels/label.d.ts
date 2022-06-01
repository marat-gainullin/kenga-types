/// <reference path="./image-paragraph.d.ts"/>

declare module 'kenga-labels/label' {
  import ImageParagraph from 'kenga-labels/image-paragraph'

  export default class Label extends ImageParagraph {
    opaque: boolean
  }
}
