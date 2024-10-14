import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/LandingTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import MainContent from "/_nuxt/components/organisms/MainContent.vue";
import TopBar from "/_nuxt/components/organisms/TopBar.vue";

const _sfc_main = {
  __name: 'LandingTemplate',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { MainContent, TopBar }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  "data-layout": "default",
  "data-v-inspector": "components/templates/LandingTemplate.vue:3:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["TopBar"]),
    _createVNode($setup["MainContent"])
  ]))
}


_sfc_main.__hmrId = "a654d5dc"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/LandingTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVNBLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUNoRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUi9DLGFBQVcsRUFBQyxTQUFTO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBQTVDLG9CQUdNLE9BSE4sVUFHTTtJQUZKLGFBQVU7SUFDVixhQUFlIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJMYW5kaW5nVGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gRXhhbXBsZSB1c2FnZSBpbiBhIHBhZ2UgLS0+XG48dGVtcGxhdGU+XG4gIDxkaXYgZGF0YS1sYXlvdXQ9XCJkZWZhdWx0XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0xhbmRpbmdUZW1wbGF0ZS52dWU6MzozXCI+XG4gICAgPFRvcEJhciAvPlxuICAgIDxNYWluQ29udGVudCAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgTWFpbkNvbnRlbnQgZnJvbSBcIn4vY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbkNvbnRlbnQudnVlXCI7XG5pbXBvcnQgVG9wQmFyIGZyb20gXCJ+L2NvbXBvbmVudHMvb3JnYW5pc21zL1RvcEJhci52dWVcIjtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL3RlbXBsYXRlcy9MYW5kaW5nVGVtcGxhdGUudnVlIn0=