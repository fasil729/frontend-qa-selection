import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/ActionButton.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
function _interopVNode(vnode) {
  if (vnode && vnode.props && 'data-v-inspector' in vnode.props) {
    const data = vnode.props['data-v-inspector']
    delete vnode.props['data-v-inspector']
    Object.defineProperty(vnode.props, '__v_inspector', { value: data, enumerable: false })
  }
  return vnode
}
function _createElementVNode(...args) { return _interopVNode(__createElementVNode(...args)) }
function _createVNode(...args) { return _interopVNode(__createVNode(...args)) }
function _createElementBlock(...args) { return _interopVNode(__createElementBlock(...args)) }
/* Injection by vite-plugin-vue-inspector End */
import Text from "/_nuxt/components/atoms/Text.vue";


const _sfc_main = {
  __name: 'ActionButton',
  props: {
  text: {
    type: String,
    required: true,
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "relative flex h-10 w-full items-center justify-center overflow-hidden rounded-md bg-black text-center text-sm cursor-pointer opacity-70 mt-6 mb-6 border border-white/100",
  "data-v-inspector": "components/molecules/ActionButton.vue:2:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "gradient absolute inset-0 opacity-50 text-center",
      "data-v-inspector": "components/molecules/ActionButton.vue:5:5"
    }, null, -1 /* HOISTED */)),
    _createVNode($setup["Text"], {
      text: $props.text,
      class: "text-white"
    }, null, 8 /* PROPS */, ["text"])
  ]))
}

import "/_nuxt/components/molecules/ActionButton.vue?vue&type=style&index=0&scoped=cbe723f3&lang.css"

_sfc_main.__hmrId = "cbe723f3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__scopeId',"data-v-cbe723f3"],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/molecules/ActionButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7O0FBRTlDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BS1o7Ozs7Ozs7Ozs7O0VBZkUsS0FBSyxFQUFDLDJLQUEySztFQUFDLGtCQUFnQixFQUFDOzs7O3dCQURyTSxvQkFLTSxPQUxOLFVBS007OEJBRkosb0JBQWlJO01BQTVILEtBQUssRUFBQyxrREFBa0Q7TUFBQyxrQkFBZ0IsRUFBQzs7SUFDL0UsYUFBd0M7TUFBakMsSUFBSSxFQUFFLFdBQUk7TUFBRSxLQUFLLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFjdGlvbkJ1dHRvbi52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBmbGV4IGgtMTAgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1tZCBiZy1ibGFjayB0ZXh0LWNlbnRlciB0ZXh0LXNtIGN1cnNvci1wb2ludGVyIG9wYWNpdHktNzAgbXQtNiBtYi02IGJvcmRlciBib3JkZXItd2hpdGUvMTAwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWU6MjozXCJcbiAgPlxuICAgIDxkaXYgY2xhc3M9XCJncmFkaWVudCBhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktNTAgdGV4dC1jZW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvQWN0aW9uQnV0dG9uLnZ1ZTo1OjVcIj48L2Rpdj5cbiAgICA8VGV4dCA6dGV4dD1cInRleHRcIiBjbGFzcz1cInRleHQtd2hpdGVcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL1RleHQudnVlXCI7XG5cbmNvbnN0IHByb3BzID0gZGVmaW5lUHJvcHMoe1xuICB0ZXh0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxufSk7XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cbi5ncmFkaWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzZmNjM2MyAwJSwgcmdiYSgxMzgsIDEzOCwgMTM4LCAwKSAxMDAlKTtcbn1cbjwvc3R5bGU+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWUifQ==