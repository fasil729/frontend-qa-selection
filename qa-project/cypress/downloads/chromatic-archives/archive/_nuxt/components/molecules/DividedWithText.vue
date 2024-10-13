import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/DividedWithText.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import DecorativeLine from "/_nuxt/components/atoms/DecorativeLine.vue";
import Text from "/_nuxt/components/atoms/Text.vue";

const _sfc_main = {
  __name: 'DividedWithText',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { DecorativeLine, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/molecules/DividedWithText.vue:2:3" }
const _hoisted_2 = {
  class: "mb-6 flex w-full items-center justify-between gap-1",
  "data-v-inspector": "components/molecules/DividedWithText.vue:3:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["DecorativeLine"], { customClass: "h-[1px] w-40 bg-gradient-to-r from-white/0 to-white" }),
      _createVNode($setup["Text"], {
        text: "Or",
        customClass: "text-white"
      }),
      _createVNode($setup["DecorativeLine"], { customClass: "h-[1px] w-40 bg-gradient-to-r from-white to-white/0" })
    ])
  ]))
}


_sfc_main.__hmrId = "3c12a4cd"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/DividedWithText.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQkEsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQ2xFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztxQkFqQnZDLGtCQUFnQixFQUFDLDhDQUE4Qzs7RUFDN0QsS0FBSyxFQUFDLHFEQUFxRDtFQUFDLGtCQUFnQixFQUFDOzs7O3dCQURwRixvQkFZTSxPQVpOLFVBWU07SUFYSixvQkFVTSxPQVZOLFVBVU07TUFUSixhQUVFLDRCQURBLFdBQVcsRUFBQyxxREFBcUQ7TUFHbkUsYUFBMkM7UUFBckMsSUFBSSxFQUFDLElBQUk7UUFBQyxXQUFXLEVBQUM7O01BRTVCLGFBRUUsNEJBREEsV0FBVyxFQUFDLHFEQUFxRCIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRGl2aWRlZFdpdGhUZXh0LnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0RpdmlkZWRXaXRoVGV4dC52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTYgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtMVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9EaXZpZGVkV2l0aFRleHQudnVlOjM6NVwiPlxuICAgICAgPERlY29yYXRpdmVMaW5lXG4gICAgICAgIGN1c3RvbUNsYXNzPVwiaC1bMXB4XSB3LTQwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS13aGl0ZS8wIHRvLXdoaXRlXCJcbiAgICAgIC8+XG5cbiAgICAgIDxUZXh0IHRleHQ9XCJPclwiIGN1c3RvbUNsYXNzPVwidGV4dC13aGl0ZVwiIC8+XG5cbiAgICAgIDxEZWNvcmF0aXZlTGluZVxuICAgICAgICBjdXN0b21DbGFzcz1cImgtWzFweF0gdy00MCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8td2hpdGUvMFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgRGVjb3JhdGl2ZUxpbmUgZnJvbSBcIn4vY29tcG9uZW50cy9hdG9tcy9EZWNvcmF0aXZlTGluZS52dWVcIjtcbmltcG9ydCBUZXh0IGZyb20gXCJ+L2NvbXBvbmVudHMvYXRvbXMvVGV4dC52dWVcIjtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvbW9sZWN1bGVzL0RpdmlkZWRXaXRoVGV4dC52dWUifQ==