/// <reference path="../kenga/index.d.ts"/>

declare module "kenga-grid/column" {
  import NodeView from 'kenga-grid/header/node-view'
  import ColumnNode from 'kenga-grid/columns/column-node'
  import Widget from 'kenga/widget'

  export default class Column {
    /**
     * Multiple 'col' elements for the single column, because of grid sections.
     */
    readonly elements: HTMLElement[]
    /**
     * Multiple 'headers' for the single column, because of splitted column nodes.
     */
    readonly headers: HTMLElement[]
    /**
     * Typically, we need only leaf column's header.
     * Leaf nodes' columns can have only single header, by nature.
     */
    readonly header: NodeView
    readonly node: ColumnNode

    field: string
    sortField: string
    sort(): void
    sortDesc(): void
    unsort(): void

    padding: number
    width: number
    minWidth: number
    maxWidth: number
    visible: boolean
    readonly: boolean
    sortable: boolean
    switchable: boolean

    renderer: Widget
    editor: Widget

    onRender: (dataRow: any, viewCell: HTMLTableCellElement, viewRowIndex?: number, text?: string) => void
    onHeaderRender: (view: NodeView, viewCell: HTMLTableCellElement) => void
  }
}

declare module "kenga-grid/header/node-view" {
  import Column from 'kenga-grid/column'
  import ColumnNode from 'kenga-grid/columns/column-node'

  export default class NodeView {
    readonly element: HTMLTableCellElement
    readonly title: string
    readonly mover: HTMLElement
    readonly resizer: HTMLElement
    text: string
    readonly column: Column
    readonly columnNode: ColumnNode
    resizable: boolean
    moveable: boolean
    sortable: boolean
  }
}

declare module "kenga-grid/columns/column-node" {
  import Widget from 'kenga/widget'
  import Column from 'kenga-grid/column'
  import NodeView from 'kenga-grid/header/node-view'

  export default class ColumnNode {
    name: string
    renderer: Widget
    editor: Widget
    column: Column
    parent: ColumnNode
    readonly chlidren: ColumnNode[]
    copy(): ColumnNode
    view: NodeView
    width: number
    minWidth: number
    maxWidth: number
    field: string
    sortField: string
    title: string
    resizable: boolean
    moveable: boolean
    visible: boolean
    readonly: boolean
    sortable: boolean
    switchable: boolean
    removeColumnNode(aNode: ColumnNode, applyOnGrid?: boolean): boolean
    removeColumnNodeAt(atIndex: number, applyOnGrid?: boolean): boolean
    addColumnNode(aNode: ColumnNode, applyOnGrid?: boolean): void
    insertColumnNode(atIndex: number, aNode: ColumnNode, applyOnGrid?: boolean): void
    sort(): void
    sortDesc(): void
    unsort(): void

    onRender: (dataRow: any, viewCell: HTMLTableCellElement, viewRowIndex?: number, text?: string) => void
    onHeaderRender: (view: NodeView, viewCell: HTMLTableCellElement) => void
  }
}

declare module "kenga-grid/columns/nodes/check-box-service-node" {
  import ColumnNode from 'kenga-grid/columns/column-node'

  export default class CheckServiceColumnNode extends ColumnNode {
    readonly checker: HTMLElement
  }
}
declare module "kenga-grid/columns/nodes/marker-service-node" {
  import ColumnNode from 'kenga-grid/columns/column-node'

  export default class MarkerServiceColumnNode extends ColumnNode { }
}
declare module "kenga-grid/columns/nodes/order-num-service-node" {
  import ColumnNode from 'kenga-grid/columns/column-node'

  export default class OrderNumServiceColumnNode extends ColumnNode { }
}
declare module "kenga-grid/columns/nodes/radio-button-service-node" {
  import ColumnNode from 'kenga-grid/columns/column-node'

  export default class RadioServiceColumnNode extends ColumnNode { }
}
