import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/NextIconSection.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import IconWithText from "/_nuxt/components/molecules/IconWithText.vue";


const _sfc_main = {
  __name: 'NextIconSection',
  props: {
  text: {
    type: String,
    default: "Back to Log in",
  },
},
  setup(__props, { expose: __expose }) {
  __expose();

const props = __props;

const __returned__ = { props, IconWithText }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "next-icon flex h-8 scale-100 cursor-pointer items-center justify-center gap-2 pb-4 transition-all active:scale-95",
  "data-v-inspector": "components/molecules/NextIconSection.vue:3:3"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createVNode($setup["IconWithText"], {
      text: $props.text,
      class: "text-white"
    }, null, 8 /* PROPS */, ["text"])
  ]))
}


_sfc_main.__hmrId = "49154ac3"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/NextIconSection.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFFbEUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FLWjs7Ozs7Ozs7Ozs7RUFkRSxLQUFLLEVBQUMsbUhBQW1IO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBRDdJLG9CQUlNLE9BSk4sVUFJTTtJQURKLGFBQWdEO01BQWpDLElBQUksRUFBRSxXQUFJO01BQUUsS0FBSyxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJOZXh0SWNvblNlY3Rpb24udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gY29tcG9uZW50cy9vcmdhbmlzbXMvTmV4dEljb25TZWN0aW9uLnZ1ZSAtLT5cbjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwibmV4dC1pY29uIGZsZXggaC04IHNjYWxlLTEwMCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTIgcGItNCB0cmFuc2l0aW9uLWFsbCBhY3RpdmU6c2NhbGUtOTVcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvTmV4dEljb25TZWN0aW9uLnZ1ZTozOjNcIlxuICA+XG4gICAgPEljb25XaXRoVGV4dCA6dGV4dD1cInRleHRcIiBjbGFzcz1cInRleHQtd2hpdGVcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgSWNvbldpdGhUZXh0IGZyb20gXCJAL2NvbXBvbmVudHMvbW9sZWN1bGVzL0ljb25XaXRoVGV4dC52dWVcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIHRleHQ6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgZGVmYXVsdDogXCJCYWNrIHRvIExvZyBpblwiLFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL21vbGVjdWxlcy9OZXh0SWNvblNlY3Rpb24udnVlIn0=