import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/SocialTransition.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
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
import Icon from "/_nuxt/components/atoms/Icon.vue";
import Image from "/_nuxt/components/atoms/Image.vue";

const _sfc_main = {
  __name: 'SocialTransition',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { Icon, Image }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "flex flex-col items-center gap-3 m-8",
  "data-v-inspector": "components/molecules/SocialTransition.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["Icon"], { "icon-class": "fa-regular fa-arrow-right text-xl" }),
    _createVNode($setup["Image"], { src: "envelope.svg" })
  ]))
}


_sfc_main.__hmrId = "217f6bf1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/molecules/SocialTransition.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDcEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFSL0IsS0FBSyxFQUFDLHNDQUFzQztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQUFuRSxvQkFHTSxPQUhOLFVBR007SUFGSixhQUF1RCxrQkFBakQsWUFBVSxFQUFDLG1DQUFtQztJQUNwRCxhQUE0QixtQkFBckIsR0FBRyxFQUFDLGNBQWMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIlNvY2lhbFRyYW5zaXRpb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC0zIG0tOFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Tb2NpYWxUcmFuc2l0aW9uLnZ1ZToyOjNcIj5cbiAgICA8SWNvbiBpY29uLWNsYXNzPVwiZmEtcmVndWxhciBmYS1hcnJvdy1yaWdodCB0ZXh0LXhsXCIgLz5cbiAgICA8SW1hZ2Ugc3JjPVwiZW52ZWxvcGUuc3ZnXCIgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwIGxhbmc9XCJqc1wiPlxuaW1wb3J0IEljb24gZnJvbSAnLi4vYXRvbXMvSWNvbi52dWUnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4uL2F0b21zL0ltYWdlLnZ1ZSc7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9tb2xlY3VsZXMvU29jaWFsVHJhbnNpdGlvbi52dWUifQ==