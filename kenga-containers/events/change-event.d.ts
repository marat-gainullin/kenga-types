/// <reference path="../../kenga/index.d.ts"/>

declare module "kenga-containers/events/change-event" {
  import Event from 'kenga/event';

  export default class ChangeEvent extends Event {
    oldValue: any
    newValue: any
  }
}
