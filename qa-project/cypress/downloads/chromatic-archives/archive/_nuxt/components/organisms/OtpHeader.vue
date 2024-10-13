import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/OtpHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import Image from "/_nuxt/components/atoms/Image.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
const imgSrc = "https://develop.aladia.io/_nuxt/image.ChQ3biW9.png";

const _sfc_main = {
  __name: 'OtpHeader',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { imgSrc, Image, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "flex flex-col items-center px-6 pt-8",
  "data-v-inspector": "components/organisms/OtpHeader.vue:8:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["Image"], {
      src: $setup.imgSrc,
      "custom-class": "mb-2 h-24 w-24 rounded object-cover"
    }),
    _createVNode($setup["Text"], {
      text: "Aladia company",
      "custom-class": "text-white"
    }),
    _createVNode($setup["Text"], {
      text: "Thanks for joining Aladia",
      "custom-class": "text-white"
    }),
    _createVNode($setup["Text"], {
      text: "Please enter below the 6-digit code we sent you\n        through your registration e-mail:",
      "custom-class": "mb-20 text-center text-white/70"
    })
  ]))
}


_sfc_main.__hmrId = "e3bb97c6"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
import.meta.hot.accept(mod => {
  if (!mod) return
  const { default: updated, _rerender_only } = mod
  if (_rerender_only) {
    __VUE_HMR_RUNTIME__.rerender(updated.__hmrId, updated.render)
  } else {
    __VUE_HMR_RUNTIME__.reload(updated.__hmrId, updated)
  }
})
import _export_sfc from "/_nuxt/@id/__x00__plugin-vue:export-helper"
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/OtpHeader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztFQUk1RCxLQUFLLEVBQUMsc0NBQXNDO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBQW5FLG9CQVNNLE9BVE4sVUFTTTtJQVJKLGFBQTBFO01BQWxFLEdBQUcsRUFBRSxhQUFNO01BQUUsY0FBWSxFQUFDOztJQUNsQyxhQUF3RDtNQUFsRCxJQUFJLEVBQUMsZ0JBQWdCO01BQUMsY0FBWSxFQUFDOztJQUN6QyxhQUFtRTtNQUE3RCxJQUFJLEVBQUMsMkJBQTJCO01BQUMsY0FBWSxFQUFDOztJQUNwRCxhQUlFO01BSEEsSUFBSSxFQUFDLDRGQUMrQjtNQUNwQyxjQUFZLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk90cEhlYWRlci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBzZXR1cCBsYW5nPVwianNcIj5cbmltcG9ydCBJbWFnZSBmcm9tIFwiLi4vYXRvbXMvSW1hZ2UudnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcbmNvbnN0IGltZ1NyYyA9IFwiaHR0cHM6Ly9kZXZlbG9wLmFsYWRpYS5pby9fbnV4dC9pbWFnZS5DaFEzYmlXOS5wbmdcIjtcbjwvc2NyaXB0PlxuXG48dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBweC02IHB0LThcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvT3RwSGVhZGVyLnZ1ZTo4OjNcIj5cbiAgICA8SW1hZ2UgOnNyYz1cImltZ1NyY1wiIGN1c3RvbS1jbGFzcz1cIm1iLTIgaC0yNCB3LTI0IHJvdW5kZWQgb2JqZWN0LWNvdmVyXCIgLz5cbiAgICA8VGV4dCB0ZXh0PVwiQWxhZGlhIGNvbXBhbnlcIiBjdXN0b20tY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgLz5cbiAgICA8VGV4dCB0ZXh0PVwiVGhhbmtzIGZvciBqb2luaW5nIEFsYWRpYVwiIGN1c3RvbS1jbGFzcz1cInRleHQtd2hpdGVcIiAvPlxuICAgIDxUZXh0XG4gICAgICB0ZXh0PVwiUGxlYXNlIGVudGVyIGJlbG93IHRoZSA2LWRpZ2l0IGNvZGUgd2Ugc2VudCB5b3VcbiAgICAgICAgdGhyb3VnaCB5b3VyIHJlZ2lzdHJhdGlvbiBlLW1haWw6XCJcbiAgICAgIGN1c3RvbS1jbGFzcz1cIm1iLTIwIHRleHQtY2VudGVyIHRleHQtd2hpdGUvNzBcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL29yZ2FuaXNtcy9PdHBIZWFkZXIudnVlIn0=