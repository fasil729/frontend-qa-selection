import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/EmailSingUpHeader.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import CheckboxWithText from "/_nuxt/components/molecules/CheckboxWithText.vue";

const _sfc_main = {
  __name: 'EmailSingUpHeader',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { NextIconSection, InfoBaner, CheckboxWithText }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/organisms/EmailSingUpHeader.vue:2:3" }

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["NextIconSection"]),
    _createVNode($setup["InfoBaner"], {
      title: "Nice to meet you",
      "content-text": "Upload a profile picture\n  and complete your\n  presentation "
    }),
    _createVNode($setup["CheckboxWithText"])
  ]))
}


_sfc_main.__hmrId = "049e809f"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/EmailSingUpHeader.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQWNBLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQztBQUN4RSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O3FCQWZ6RCxrQkFBZ0IsRUFBQyxnREFBZ0Q7Ozt3QkFBdEUsb0JBU00sT0FUTixVQVNNO0lBUkosYUFBbUI7SUFDbkIsYUFLRTtNQUpBLEtBQUssRUFBQyxrQkFBa0I7TUFDeEIsY0FBWSxFQUFDOztJQUlmLGFBQW9CIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJFbWFpbFNpbmdVcEhlYWRlci52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9FbWFpbFNpbmdVcEhlYWRlci52dWU6MjozXCI+XG4gICAgPE5leHRJY29uU2VjdGlvbiAvPlxuICAgIDxJbmZvQmFuZXJcbiAgICAgIHRpdGxlPVwiTmljZSB0byBtZWV0IHlvdVwiXG4gICAgICBjb250ZW50LXRleHQ9XCJVcGxvYWQgYSBwcm9maWxlIHBpY3R1cmVcbiAgYW5kIGNvbXBsZXRlIHlvdXJcbiAgcHJlc2VudGF0aW9uIFwiXG4gICAgLz5cbiAgICA8Q2hlY2tib3hXaXRoVGV4dCAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgTmV4dEljb25TZWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL05leHRJY29uU2VjdGlvbi52dWVcIjtcbmltcG9ydCBJbmZvQmFuZXIgZnJvbSBcIi4uL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlXCI7XG5pbXBvcnQgQ2hlY2tib3hXaXRoVGV4dCBmcm9tIFwiLi4vbW9sZWN1bGVzL0NoZWNrYm94V2l0aFRleHQudnVlXCI7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL29yZ2FuaXNtcy9FbWFpbFNpbmdVcEhlYWRlci52dWUifQ==