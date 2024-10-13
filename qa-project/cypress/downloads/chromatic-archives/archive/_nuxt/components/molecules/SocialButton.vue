import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/SocialButton.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"
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
  __name: 'SocialButton',
  props: {
  id: {
    type: String,
  },
  iconSrc: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  buttonText: {
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
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = ["id"]
const _hoisted_2 = ["src", "alt"]

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", {
    id: $props.id,
    class: "flex cursor-pointer items-center justify-center gap-4 rounded border border-white/20 py-1.5 shadow-[0px_3px_6px_#00000000] transition-all hover:bg-white/20 hover:shadow-[0px_3px_6px_#000000] active:scale-95",
    "data-v-inspector": "components/molecules/SocialButton.vue:2:3"
  }, [
    _createElementVNode("img", {
      src: $props.iconSrc,
      alt: $props.altText,
      class: "h-6",
      "data-v-inspector": "components/molecules/SocialButton.vue:6:5"
    }, null, 8 /* PROPS */, _hoisted_2),
    _createVNode($setup["Text"], {
      text: $props.buttonText,
      customClass: "w-40 text-white text-nowrap"
    }, null, 8 /* PROPS */, ["text"])
  ], 8 /* PROPS */, _hoisted_1))
}


_sfc_main.__hmrId = "4f52d45c"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/molecules/SocialButton.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFXQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BZ0JaOzs7Ozs7Ozs7O21CQTdCRjttQkFBQTs7O3dCQUNFLG9CQU1NO0lBTEgsRUFBRSxFQUFFLFNBQUU7SUFDUCxLQUFLLEVBQUMsZ05BQWdOO0lBQUMsa0JBQWdCLEVBQUM7O0lBRXhPLG9CQUE4RztNQUF4RyxHQUFHLEVBQUUsY0FBTztNQUFHLEdBQUcsRUFBRSxjQUFPO01BQUUsS0FBSyxFQUFDLEtBQUs7TUFBQyxrQkFBZ0IsRUFBQzs0QkFMcEU7SUFNSSxhQUFxRTtNQUE5RCxJQUFJLEVBQUUsaUJBQVU7TUFBRSxXQUFXLEVBQUM7O29CQU56QyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU29jaWFsQnV0dG9uLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICA6aWQ9XCJpZFwiXG4gICAgY2xhc3M9XCJmbGV4IGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCByb3VuZGVkIGJvcmRlciBib3JkZXItd2hpdGUvMjAgcHktMS41IHNoYWRvdy1bMHB4XzNweF82cHhfIzAwMDAwMDAwXSB0cmFuc2l0aW9uLWFsbCBob3ZlcjpiZy13aGl0ZS8yMCBob3ZlcjpzaGFkb3ctWzBweF8zcHhfNnB4XyMwMDAwMDBdIGFjdGl2ZTpzY2FsZS05NVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Tb2NpYWxCdXR0b24udnVlOjI6M1wiXG4gID5cbiAgICA8aW1nIDpzcmM9XCJpY29uU3JjXCIgOmFsdD1cImFsdFRleHRcIiBjbGFzcz1cImgtNlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9Tb2NpYWxCdXR0b24udnVlOjY6NVwiIC8+XG4gICAgPFRleHQgOnRleHQ9XCJidXR0b25UZXh0XCIgY3VzdG9tQ2xhc3M9XCJ3LTQwIHRleHQtd2hpdGUgdGV4dC1ub3dyYXBcIiAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcblxuY29uc3QgcHJvcHMgPSBkZWZpbmVQcm9wcyh7XG4gIGlkOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICB9LFxuICBpY29uU3JjOiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBhbHRUZXh0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxuICBidXR0b25UZXh0OiB7XG4gICAgdHlwZTogU3RyaW5nLFxuICAgIHJlcXVpcmVkOiB0cnVlLFxuICB9LFxufSk7XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL21vbGVjdWxlcy9Tb2NpYWxCdXR0b24udnVlIn0=