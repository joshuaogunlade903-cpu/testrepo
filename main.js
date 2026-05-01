import {Zenith} from '/Zenith.esp.js'
const {DOM,APP,ZNativeImport,$bind} = Zenith

Zenith.setGlobal({$bind})

ZNativeImport('main').runIn(DOM.body)