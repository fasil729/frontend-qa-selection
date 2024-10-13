import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/PasswordSuccessTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import { store } from "/_nuxt/store/store.js";


const _sfc_main = {
  __name: 'PasswordSuccessTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const proceedToHome = async () => {
  store.isPasswordSuccessPage = false;
};

const __returned__ = { proceedToHome, InfoBaner, Text, ActionButton, get store() { return store } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/PasswordSuccessTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/PasswordSuccessTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["InfoBaner"], {
        title: "Add New Password",
        "content-text": "retrieve Your password\n  account through your\n  registration mail"
      }),
      _createVNode($setup["Text"], {
        text: "Password Successfully Added!",
        class: "text-white/70 p-8"
      }),
      _createVNode($setup["ActionButton"], {
        onPointerup: $setup.proceedToHome,
        text: "Proceed to Aladia",
        class: "p-8"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "d93eed57"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/PasswordSuccessTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUEwQkEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7OztBQUVyQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUNyQyxDQUFDOzs7Ozs7Ozs7OztFQS9CRyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBSnhILG9CQXFCTSxPQXJCTixVQXFCTTtJQWxCSixvQkFpQk0sT0FqQk4sVUFpQk07TUFkSixhQU1FO1FBSkEsS0FBSyxFQUFDLGtCQUFrQjtRQUN4QixjQUFZLEVBQUM7O01BSWYsYUFBc0U7UUFBaEUsSUFBSSxFQUFDLDhCQUE4QjtRQUFDLEtBQUssRUFBQzs7TUFFaEQsYUFJRTtRQUhDLFdBQVMsRUFBRSxvQkFBYTtRQUN6QixJQUFJLEVBQUMsbUJBQW1CO1FBQ3hCLEtBQUssRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmFja2Ryb3AtYmx1ci1bNXB4XSBiZy1vcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkU3VjY2Vzc1RlbXBsYXRlLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSBtLTUgdGV4dC0xMyBib3JkZXIgZmxleCBmbGV4LWNvbCBnYXAtOSByb3VuZGVkLWxnIHBvcHVwLWNvbnRlbnQgYmctYmxhY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPEluZm9CYW5lclxuICAgICAgIFxuICAgICAgICB0aXRsZT1cIkFkZCBOZXcgUGFzc3dvcmRcIlxuICAgICAgICBjb250ZW50LXRleHQ9XCJyZXRyaWV2ZSBZb3VyIHBhc3N3b3JkXG4gIGFjY291bnQgdGhyb3VnaCB5b3VyXG4gIHJlZ2lzdHJhdGlvbiBtYWlsXCJcbiAgICAgIC8+XG4gICAgICA8VGV4dCB0ZXh0PVwiUGFzc3dvcmQgU3VjY2Vzc2Z1bGx5IEFkZGVkIVwiIGNsYXNzPVwidGV4dC13aGl0ZS83MCBwLThcIiAvPlxuXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIEBwb2ludGVydXA9XCJwcm9jZWVkVG9Ib21lXCJcbiAgICAgICAgdGV4dD1cIlByb2NlZWQgdG8gQWxhZGlhXCJcbiAgICAgICAgY2xhc3M9XCJwLThcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IEluZm9CYW5lciBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL1RleHQudnVlXCI7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWVcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIn4vc3RvcmUvc3RvcmVcIjtcblxuY29uc3QgcHJvY2VlZFRvSG9tZSA9IGFzeW5jICgpID0+IHtcbiAgc3RvcmUuaXNQYXNzd29yZFN1Y2Nlc3NQYWdlID0gZmFsc2U7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlIn0=