/// <reference path="../kenga/index.d.ts"/>

declare module 'kenga-fields/drop-down-field' {
  import BoxField from 'kenga/box-field'
  import ItemEvent from 'kenga/events/item-event'

  export default class DropDownField extends BoxField {
    emptyText: string
    text: string
    value: any
    textChanged(): void
    addSelectHandler(handler: (evt: ItemEvent) => void): { removeHandler: () => void }

    selectedIndex: number
    count: number
    visibleItemCount: number

    addValue(aLabel: string, aValue: any): void
    insertValue(insertAt: number, aLabel: string, aValue: any): void
    updateLabel(aValue: any, aLabel: string): void
    valueAt(index: number): any
    labelAt(index: number): string
    removeValue(aValue: any): boolean
    clear(): void
    indexOfValue(aValue: any): number
  }

}
