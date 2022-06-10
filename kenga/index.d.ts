declare module 'kenga/utils' {
  namespace Utils {
    function isPopupSession(): boolean
    function isMenuSession(): boolean
    function startMenuSession(): void
    function startPopupSession(): void
    function closeMenuSession(): void
    function closePopupSession(): void

    function next(): number
    function nextExtended(): string
    function later(action: () => void): void
    function delayed(timeout: number, action: () => void): void
    function throttle(timeout: number, action: () => void): void

    function on(element: HTMLElement, eventName: string, handler: (evt: Event) => void, capturePhase?: boolean): { removeHandler: () => void }

    function selectFile(onSelection: (selected: File) => void, fileFilter: string): void
    function selectColor(onSelection: (selected: any) => void, oldValue: any): void

    enum Cursor {
      CROSSHAIR = "crosshair",
      DEFAULT = "default",
      AUTO = "auto",
      E_RESIZE = "e-resize",
      // help ?
      // progress ?
      HAND = "pointer",
      MOVE = "move",
      NE_RESIZE = "ne-resize",
      NW_RESIZE = "nw-resize",
      N_RESIZE = "n-resize",
      SE_RESIZE = "se-resize",
      SW_RESIZE = "sw-resize",
      S_RESIZE = "s-resize",
      TEXT = "text",
      WAIT = "wait",
      W_RESIZE = "w-resize"
    }

    enum Events {
      BLUR = 'blur',
      CANPLAYTHROUGH = 'canplaythrough',
      CHANGE = 'change',
      CLICK = 'click',
      CONTEXTMENU = 'contextmenu',
      DBLCLICK = 'dblclick',
      DRAG = 'drag',
      DRAGEND = 'dragend',
      DRAGENTER = 'dragenter',
      DRAGLEAVE = 'dragleave',
      DRAGOVER = 'dragover',
      DRAGSTART = 'dragstart',
      DROP = 'drop',
      ENDED = 'ended',
      ERROR = 'error',
      FOCUS = 'focus',
      FOCUSIN = 'focusin',
      FOCUSOUT = 'focusout',
      GESTURECHANGE = 'gesturechange',
      GESTUREEND = 'gestureend',
      GESTURESTART = 'gesturestart',
      INPUT = 'input',
      KEYDOWN = 'keydown',
      KEYPRESS = 'keypress',
      KEYUP = 'keyup',
      LOAD = 'load',
      LOADEDMETADATA = 'loadedmetadata',
      LOSECAPTURE = 'losecapture',
      MOUSEDOWN = 'mousedown',
      MOUSEMOVE = 'mousemove',
      MOUSEOUT = 'mouseout',
      MOUSEOVER = 'mouseover',
      MOUSEUP = 'mouseup',
      MOUSEWHEEL = 'mousewheel',
      PROGRESS = 'progress',
      SCROLL = 'scroll',
      TOUCHCANCEL = 'touchcancel',
      TOUCHEND = 'touchend',
      TOUCHMOVE = 'touchmove',
      TOUCHSTART = 'touchstart'
    }

    enum Orientation {
      HORIZONTAL = 'horizontal',
      VERTICAL = 'vertical'
    }

    enum VerticalPosition {
      CENTER = 'center',
      TOP = 'top',
      BOTTOM = 'bottom'
    }

    enum VerticalAlign {
      CENTER = 'center',
      TOP = 'top',
      BOTTOM = 'bottom',
      FIT = 'fit'
    }

    enum HorizontalPosition {
      CENTER = 'center',
      LEFT = 'left',
      RIGHT = 'right'
    }

    enum HorizontalAlign {
      CENTER = 'center',
      LEFT = 'left',
      RIGHT = 'right',
      FIT = 'fit'
    }

    enum ScrollBarPolicy {
      ALLWAYS = 'allways',
      NEVER = 'never',
      AUTO = 'auto'
    }
  }
  export default Utils
}

declare module 'kenga/key-codes' {
  enum KeyCodes {
    /**
     * Key code for A
     */
    KEY_A = 65,
    /**
     * Key code for B
     */
    KEY_B = 66,
    /**
     * Key code for C
     */
    KEY_C = 67,
    /**
     * Key code for D
     */
    KEY_D = 68,
    /**
     * Key code for E
     */
    KEY_E = 69,
    /**
     * Key code for F
     */
    KEY_F = 70,
    /**
     * Key code for G
     */
    KEY_G = 71,
    /**
     * Key code for H
     */
    KEY_H = 72,
    /**
     * Key code for I
     */
    KEY_I = 73,
    /**
     * Key code for J
     */
    KEY_J = 74,
    /**
     * Key code for K
     */
    KEY_K = 75,
    /**
     * Key code for L
     */
    KEY_L = 76,
    /**
     * Key code for M
     */
    KEY_M = 77,
    /**
     * Key code for N
     */
    KEY_N = 78,
    /**
     * Key code for O
     */
    KEY_O = 79,
    /**
     * Key code for P
     */
    KEY_P = 80,
    /**
     * Key code for Q
     */
    KEY_Q = 81,
    /**
     * Key code for R
     */
    KEY_R = 82,
    /**
     * Key code for S
     */
    KEY_S = 83,
    /**
     * Key code for T
     */
    KEY_T = 84,
    /**
     * Key code for U
     */
    KEY_U = 85,
    /**
     * Key code for V
     */
    KEY_V = 86,
    /**
     * Key code for W
     */
    KEY_W = 87,
    /**
     * Key code for X
     */
    KEY_X = 88,
    /**
     * Key code for Y
     */
    KEY_Y = 89,
    /**
     * Key code for Z
     */
    KEY_Z = 90,

    /**
     * Key code number 0
     */
    KEY_ZERO = 48,
    /**
     * Key code number 1
     */
    KEY_ONE = 49,
    /**
     * Key code number 2
     */
    KEY_TWO = 50,
    /**
     * Key code number 3
     */
    KEY_THREE = 51,
    /**
     * Key code number 4
     */
    KEY_FOUR = 52,
    /**
     * Key code number 5
     */
    KEY_FIVE = 53,
    /**
     * Key code number 6
     */
    KEY_SIX = 54,
    /**
     * Key code number 7
     */
    KEY_SEVEN = 55,
    /**
     * Key code number 8
     */
    KEY_EIGHT = 56,
    /**
     * Key code number 9
     */
    KEY_NINE = 57,

    /**
     * Key code for number 0 on numeric keyboard
     */
    KEY_NUM_ZERO = 96,
    /**
     * Key code for number 1 on numeric keyboard
     */
    KEY_NUM_ONE = 97,
    /**
     * Key code for number 2 on numeric keyboard
     */
    KEY_NUM_TWO = 98,
    /**
     * Key code for number 3 on numeric keyboard
     */
    KEY_NUM_THREE = 99,
    /**
     * Key code for number 4 on numeric keyboard
     */
    KEY_NUM_FOUR = 100,
    /**
     * Key code for number 5 on numeric keyboard
     */
    KEY_NUM_FIVE = 101,
    /**
     * Key code for number 6 on numeric keyboard
     */
    KEY_NUM_SIX = 102,
    /**
     * Key code for number 7 on numeric keyboard
     */
    KEY_NUM_SEVEN = 103,
    /**
     * Key code for number 8 on numeric keyboard
     */
    KEY_NUM_EIGHT = 104,
    /**
     * Key code for number 9 on numeric keyboard
     */
    KEY_NUM_NINE = 105,
    /**
     * Key code for multiply on numeric keyboard
     */
    KEY_NUM_MULTIPLY = 106,
    /**
     * Key code for plus on numeric keyboard
     */
    KEY_NUM_PLUS = 107,
    /**
     * Key code for minus on numeric keyboard
     */
    KEY_NUM_MINUS = 109,
    /**
     * Key code for period on numeric keyboard
     */
    KEY_NUM_PERIOD = 110,
    /**
     * Key code for division on numeric keyboard
     */
    KEY_NUM_DIVISION = 111,
    /**
     * Alt key code.
     */
    KEY_ALT = 18,

    /**
     * Backspace key code.
     */
    KEY_BACKSPACE = 8,
    /**
     * Control key code.
     */
    KEY_CTRL = 17,

    /**
     * Delete key code (also numeric keypad delete).
     */
    KEY_DELETE = 46,

    /**
     * Down arrow code (Also numeric keypad down).
     */
    KEY_DOWN = 40,

    /**
     * End key code (Also numeric keypad south west).
     */
    KEY_END = 35,

    /**
     * Enter key code.
     */
    KEY_ENTER = 13,
    /**
     * Escape key code.
     */
    KEY_ESCAPE = 27,
    /**
     * Home key code (Also numeric keypad north west).
     */
    KEY_HOME = 36,
    /**
     * Left key code (Also numeric keypad west).
     */
    KEY_LEFT = 37,
    /**
     * Page down key code (Also numeric keypad south east).
     */
    KEY_PAGEDOWN = 34,
    /**
     * Page up key code (Also numeric keypad north east).
     */
    KEY_PAGEUP = 33,
    /**
     * Right arrow key code (Also numeric keypad east).
     */
    KEY_RIGHT = 39,
    /**
     * Shift key code.
     */
    KEY_SHIFT = 16,

    /**
     * Tab key code.
     */
    KEY_TAB = 9,
    /**
     * Up Arrow key code (Also numeric keypad north).
     */
    KEY_UP = 38,
    /**
     * Key code for F1
     */
    KEY_F1 = 112,
    /**
     * Key code for F2
     */
    KEY_F2 = 113,
    /**
     * Key code for F3
     */
    KEY_F3 = 114,
    /**
     * Key code for F4
     */
    KEY_F4 = 115,
    /**
     * Key code for F5
     */
    KEY_F5 = 116,
    /**
     * Key code for F6
     */
    KEY_F6 = 117,
    /**
     * Key code for F7
     */
    KEY_F7 = 118,
    /**
     * Key code for F8
     */
    KEY_F8 = 119,
    /**
     * Key code for F9
     */
    KEY_F9 = 120,
    /**
     * Key code for F10
     */
    KEY_F10 = 121,
    /**
     * Key code for F11
     */
    KEY_F11 = 122,
    /**
     * Key code for F12
     */
    KEY_F12 = 123,
    /**
     * Key code for Windows key on Firefox Linux
     */
    KEY_WIN_KEY_FF_LINUX = 0,
    /**
     * Key code for Mac enter key
     */
    KEY_MAC_ENTER = 3,
    /**
     * Key code for pause key
     */
    KEY_PAUSE = 19,
    /**
     * Key code for caps lock key
     */
    KEY_CAPS_LOCK = 20,
    /**
     * Key code for space
     */
    KEY_SPACE = 32,
    /**
     * Key code for print key
     */
    KEY_PRINT_SCREEN = 44,
    /**
     * Key code for insert key (Also numeric keyboard insert).
     */
    KEY_INSERT = 45, // also NUM_INSERT
    /**
     * Key code for insert key (Also num lock on FF,Safari Mac).
     */
    KEY_NUM_CENTER = 12,
    /**
     * Key code for left windows key.
     */
    KEY_WIN_KEY = 224,
    /**
     * Key code for left windows key or meta.
     */
    KEY_WIN_KEY_LEFT_META = 91,
    /**
     * Key code for right windows key.
     */
    KEY_WIN_KEY_RIGHT = 92,
    /**
     * Key code for context menu key.
     */
    KEY_CONTEXT_MENU = 93,
    /**
     * Key code for {@link KeyCodes#KEY_WIN_KEY_LEFT_META} that Firefox fires
     * for the meta key.
     */
    KEY_MAC_FF_META = 224, // Firefox (Gecko) fires this for the meta key instead of 91
    /**
     * Key code for num lock.
     */
    KEY_NUMLOCK = 144,
    /**
     * Key code for scroll lock.
     */
    KEY_SCROLL_LOCK = 145,
    /**
     * Key code for first OS specific media key (like volume).
     */
    KEY_FIRST_MEDIA_KEY = 166,
    /**
     * Key code for last OS specific media key (like volume).
     */
    KEY_LAST_MEDIA_KEY = 183,
    /**
     * Key code for IME.
     */
    KEY_WIN_IME = 229
  }
  export default KeyCodes
}

declare module 'kenga/event' {
  import Widget from 'kenga/widget'

  export default class KengaEvent {
    event: Event
    source: Widget
    target: Widget
  }
}

declare module 'kenga/events/widget-event' {
  import Event from 'kenga/event'
  export default class WidgetEvent extends Event { }
}

declare module 'kenga/events/action-event' {
  import Event from 'kenga/event'
  export default class ActionEvent extends Event { }
}

declare module 'kenga/events/blur-event' {
  import Event from 'kenga/event'
  export default class BlurEvent extends Event { }
}

declare module 'kenga/events/container-event' {
  import Event from 'kenga/event'
  import Widget from 'kenga/widget'

  export default class ContainerEvent extends Event {
    child: Widget
  }
}

declare module 'kenga/events/focus-event' {
  import Event from 'kenga/event'
  export default class FocusEvent extends Event { }
}

declare module 'kenga/events/item-event' {
  import Event from 'kenga/event'

  export default class ItemEvent extends Event {
    item: any
  }
}

declare module 'kenga/events/key-event' {
  import Event from 'kenga/event'

  export default class KeyEvent extends Event {
    altDown: boolean
    controlDown: boolean
    shiftDown: boolean
    metaDown: boolean
    key: number
    char: number
  }
}

declare module 'kenga/events/mouse-event' {
  import Event from 'kenga/event'
  export default class MouseEvent extends Event {
    x: number
    y: number
    screenX: number
    screenY: number
    altDown: boolean
    controlDown: boolean
    shiftDown: boolean
    metaDown: boolean
    button: number
    clickCount: number
  }
}

declare module 'kenga/events/text-change-event' {
  import Event from 'kenga/event'

  export default class TextChangeEvent extends Event {
    value: string
  }
}

declare module 'kenga/events/value-change-event' {
  import Event from 'kenga/event'

  export default class ValueChangeEvent extends Event {
    oldValue: any
    newValue: any
  }
}

declare module 'kenga/has-value' {
  import ValueChangeEvent from 'kenga/events/value-change-event'

  export default interface HasValue {
    text: string
    value: any
    onValueChange: (evt: ValueChangeEvent) => void
    addValueChangeHandler: (handler: (evt: ValueChangeEvent) => void) => { removeHandler: () => void }
    fireValueChanged(): void
  }
}

declare module 'kenga/widget' {
  import WidgetEvent from 'kenga/events/widget-event'
  import ActionEvent from 'kenga/events/action-event'
  import MouseEvent from 'kenga/events/mouse-event'
  import ValueChangeEvent from 'kenga/events/value-change-event'
  import FocusEvent from 'kenga/events/focus-event'
  import BlurEvent from 'kenga/events/blur-event'
  import KeyEvent from 'kenga/events/key-event'
  import ItemEvent from 'kenga/events/item-event'

  export class Tab {
    title: string
    toolTipText: string
    icon: string | HTMLElement
    closable: boolean
    readonly element: HTMLElement
  }

  export default class Widget {
    visibleDisplay: string
    parent: Widget
    readonly element: HTMLElement
    readonly shell: HTMLElement
    readonly box: HTMLElement
    enabled: boolean
    name: string
    title: string
    toolTipText: string
    error: string
    tabIndex: number
    focusable: boolean
    contextMenu: Widget
    attached: boolean
    visible: boolean
    /**
     * It is used only when the widget is a child of a TabbedPane
     */
    tab: Tab

    focus(): void
    blur(): void

    addActionHandler(handler: (evt: ActionEvent) => void): { removeHandler: () => void }
    onAction: (evt: ActionEvent) => void
    fireAction: () => void

    addMouseExitHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseExit: (evt: MouseEvent) => void

    addMouseClickHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseClick: (evt: MouseEvent) => void

    addMouseDoubleClickHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseDoubleClick: (evt: MouseEvent) => void

    addMousePressHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMousePress: (evt: MouseEvent) => void

    addMouseReleaseHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseRelease: (evt: MouseEvent) => void

    addMouseEnterHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseEnter: (evt: MouseEvent) => void

    addMouseWheelHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseWheelMove: (evt: MouseEvent) => void

    addMouseMoveHandler(handler: (evt: MouseEvent) => void): { removeHandler: () => void }
    onMouseMove: (evt: MouseEvent) => void

    addShowHandler(handler: (evt: WidgetEvent) => void): { removeHandler: () => void }
    onShow: (evt: WidgetEvent) => void

    addHideHandler(handler: (evt: WidgetEvent) => void): { removeHandler: () => void }
    onHide: (evt: WidgetEvent) => void

    onFocus: (evt: FocusEvent) => void
    onFocusLost: (evt: BlurEvent) => void
    onKeyType: (evt: KeyEvent) => void
    onKeyPress: (evt: KeyEvent) => void
    onKeyRelease: (evt: KeyEvent) => void
    onSelect: (evt: ItemEvent) => void
    onValueChange: (evt: ValueChangeEvent) => void
  }

}

declare module 'kenga/container' {
  import Widget from 'kenga/widget'
  import ContainerEvent from 'kenga/events/container-event'

  export default class Container extends Widget {
    readonly count: number
    child(index: number, subIndex?: number): Widget
    children(): Widget[]
    forEach(action: (child: Widget) => void): void
    indexOf(child: Widget): number
    add(w: Widget, beforeIndex?: number | any, subIndex?: number): void
    remove(child: Widget, subIndex?: number): Widget
    clear(): void

    addAddHandler(handler: (evt: ContainerEvent) => void): { removeHandler: () => void }
    onAdd: (evt: ContainerEvent) => void

    addRemoveHandler(handler: (evt: ContainerEvent) => void): { removeHandler: () => void }
    onRemove: (evt: ContainerEvent) => void
  }
}

declare module 'kenga/box-field' {
  import Widget from 'kenga/widget'
  import TextChangeEvent from 'kenga/events/text-change-event'
  import ValueChangeEvent from 'kenga/events/value-change-event'
  import FocusEvent from 'kenga/events/focus-event'
  import BlurEvent from 'kenga/events/blur-event'
  import KeyEvent from 'kenga/events/key-event'

  export default class BoxField extends Widget {
    readonly box: HTMLInputElement
    emptyText: string
    readonly valid: boolean
    formatError: () => string

    fireTextChanged(): void
    addTextChangeHandler(handler: (evt: TextChangeEvent) => void): { removeHandler: () => void }
    onTextChange: (evt: TextChangeEvent) => void

    addFocusHandler(handler: (evt: FocusEvent) => void): { removeHandler: () => void }
    addFocusLostHandler(handler: (evt: BlurEvent) => void): { removeHandler: () => void }

    addKeyTypeHandler(handler: (evt: KeyEvent) => void): { removeHandler: () => void }
    addKeyPressHandler(handler: (evt: KeyEvent) => void): { removeHandler: () => void }
    addKeyReleaseHandler(handler: (evt: KeyEvent) => void): { removeHandler: () => void }

    fireValueChanged(): void
    addValueChangeHandler(handler: (evt: ValueChangeEvent) => void): { removeHandler: () => void }
  }
}

declare module "kenga/decorator" {
  import Widget from 'kenga/widget'

  export default interface Decorator {
    selector: HTMLElement
    clearer: HTMLElement

    nullable: boolean
    onValueSelect: (source: Widget) => void
  }
}

declare module "kenga/bound" {
  export default interface Bound {
    data: any
    field: string
  }
}
