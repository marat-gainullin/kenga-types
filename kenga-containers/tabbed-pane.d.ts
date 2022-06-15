/// <reference path="./card-pane.d.ts"/>

declare module 'kenga-containers/tabbed-pane' {
  import Cards from 'kenga-containers/card-pane'

  export default class TabbedPane extends Cards {
    captions: HTMLElement
    captionsShell: HTMLElement
  }
}
