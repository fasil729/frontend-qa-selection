import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/APasswordSuccessTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
  __name: 'APasswordSuccessTemplate',
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
  "data-v-inspector": "components/templates/APasswordSuccessTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/APasswordSuccessTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["InfoBaner"], {
        "custom-class": "border border-white p-3",
        "img-src": "https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg",
        title: "Add New Password",
        "content-text": "Your account uses\nApple Sign-in.\nAdd a new password. "
      }),
      _createVNode($setup["Text"], {
        text: "Password Successfully Added!",
        class: "text-white/70 text-center p-8"
      }),
      _createVNode($setup["ActionButton"], {
        onPointerup: $setup.proceedToHome,
        text: "Proceed to Aladia",
        class: "p-8"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "917987cf"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/APasswordSuccessTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUE4QkEsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOzs7Ozs7OztBQUVyQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsS0FBSztBQUNyQyxDQUFDOzs7Ozs7Ozs7OztFQW5DRyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBSnhILG9CQXlCTSxPQXpCTixVQXlCTTtJQXRCSixvQkFxQk0sT0FyQk4sVUFxQk07TUFsQkosYUFPRTtRQU5GLGNBQVksRUFBQyx5QkFBeUI7UUFDcEMsU0FBTyxFQUFDLG1HQUFtRztRQUMzRyxLQUFLLEVBQUMsa0JBQWtCO1FBQ3hCLGNBQVksRUFBQzs7TUFJZixhQUdFO1FBRkEsSUFBSSxFQUFDLDhCQUE4QjtRQUNuQyxLQUFLLEVBQUM7O01BR1IsYUFJRTtRQUhDLFdBQVMsRUFBRSxvQkFBYTtRQUN6QixJQUFJLEVBQUMsbUJBQW1CO1FBQ3hCLEtBQUssRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiQVBhc3N3b3JkU3VjY2Vzc1RlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJhY2tkcm9wLWJsdXItWzVweF0gYmctb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgcC01IG0tNSB0ZXh0LTEzIGJvcmRlciBmbGV4IGZsZXgtY29sIGdhcC05IHJvdW5kZWQtbGcgcG9wdXAtY29udGVudCBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRTdWNjZXNzVGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPEluZm9CYW5lclxuICAgICAgY3VzdG9tLWNsYXNzPVwiYm9yZGVyIGJvcmRlci13aGl0ZSBwLTNcIlxuICAgICAgICBpbWctc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9hcmNoaXZlLzMvMzEvMjAyMDEyMjgxMzIzMjAlMjFBcHBsZV9sb2dvX3doaXRlLnN2Z1wiXG4gICAgICAgIHRpdGxlPVwiQWRkIE5ldyBQYXNzd29yZFwiXG4gICAgICAgIGNvbnRlbnQtdGV4dD1cIllvdXIgYWNjb3VudCB1c2VzXG5BcHBsZSBTaWduLWluLlxuQWRkIGEgbmV3IHBhc3N3b3JkLiBcIlxuICAgICAgLz5cbiAgICAgIDxUZXh0XG4gICAgICAgIHRleHQ9XCJQYXNzd29yZCBTdWNjZXNzZnVsbHkgQWRkZWQhXCJcbiAgICAgICAgY2xhc3M9XCJ0ZXh0LXdoaXRlLzcwIHRleHQtY2VudGVyIHAtOFwiXG4gICAgICAvPlxuXG4gICAgICA8QWN0aW9uQnV0dG9uXG4gICAgICAgIEBwb2ludGVydXA9XCJwcm9jZWVkVG9Ib21lXCJcbiAgICAgICAgdGV4dD1cIlByb2NlZWQgdG8gQWxhZGlhXCJcbiAgICAgICAgY2xhc3M9XCJwLThcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IEluZm9CYW5lciBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbmZvQmFuZXIudnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL2F0b21zL1RleHQudnVlXCI7XG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0FjdGlvbkJ1dHRvbi52dWVcIjtcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIn4vc3RvcmUvc3RvcmVcIjtcblxuY29uc3QgcHJvY2VlZFRvSG9tZSA9IGFzeW5jICgpID0+IHtcbiAgc3RvcmUuaXNQYXNzd29yZFN1Y2Nlc3NQYWdlID0gZmFsc2U7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvQVBhc3N3b3JkU3VjY2Vzc1RlbXBsYXRlLnZ1ZSJ9