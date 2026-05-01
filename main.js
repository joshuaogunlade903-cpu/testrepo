import {Zenith} from '/Zenith.esp.js'
const {DOM,APP,ZNativeImport,$bind} = Zenith

Zenith.setGlobal({$bind})

Zenith.Flex.$serialize(async ()=>{
 const mainT=await ZNativeImport("main")
 mainT.runIn(DOM.body)
})