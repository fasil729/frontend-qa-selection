import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/molecules/CheckboxWithText.vue");import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";
/* Injection by vite-plugin-vue-inspector Start */
import { createVNode as __createVNode,createElementVNode as __createElementVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
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
import Text from "/_nuxt/components/atoms/Text.vue";

const _sfc_main = {
  __name: 'CheckboxWithText',
  setup(__props, { expose: __expose }) {
  __expose();

const isChecked = ref(false);

const __returned__ = { isChecked, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { resolveComponent as _resolveComponent,  withCtx as _withCtx,  createTextVNode as _createTextVNode, openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = { "data-v-inspector": "components/molecules/CheckboxWithText.vue:2:3" }
const _hoisted_2 = {
  class: "mb-4 flex items-center gap-2 text-centers",
  "data-v-inspector": "components/molecules/CheckboxWithText.vue:3:5"
}
const _hoisted_3 = {
  class: "text-xs text-white/70",
  "data-v-inspector": "components/molecules/CheckboxWithText.vue:11:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Icon = _resolveComponent("Icon")
  const _component_Input = _resolveComponent("Input")

  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode(_component_Input, {
        "onUpdate:checked": _cache[0] || (_cache[0] = $event => ($setup.isChecked = $event)),
        type: "checkbox",
        customClass: "border-white/50 hover:border-white"
      }, {
        default: _withCtx(() => [
          _createVNode(_component_Icon, {
            visible: $setup.isChecked,
            iconClass: "text-sm"
          }, null, 8 /* PROPS */, ["visible"])
        ]),
        _: 1 /* STABLE */
      }),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["Text"], {
          text: "I accept",
          customClass: "inline-block"
        }),
        _cache[1] || (_cache[1] = _createElementVNode("span", {
          class: "underline text-white cursor-pointer",
          "data-v-inspector": "components/molecules/CheckboxWithText.vue:13:9"
        }, " Terms & Conditions ", -1 /* HOISTED */)),
        _cache[2] || (_cache[2] = _createTextVNode(" and ")),
        _cache[3] || (_cache[3] = _createElementVNode("span", {
          class: "underline text-white cursor-pointer",
          "data-v-inspector": "components/molecules/CheckboxWithText.vue:17:9"
        }, " Privacy Policy ", -1 /* HOISTED */))
      ])
    ]),
    _createVNode($setup["Text"], {
      text: "Enter your details",
      "custom-class": "mb-6 text-center text-white"
    })
  ]))
}


_sfc_main.__hmrId = "c0229a07"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/molecules/CheckboxWithText.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7QUFEcEMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQzs7Ozs7Ozs7OztxQkE1QnJCLGtCQUFnQixFQUFDLCtDQUErQzs7RUFDOUQsS0FBSyxFQUFDLDJDQUEyQztFQUFDLGtCQUFnQixFQUFDOzs7RUFRakUsS0FBSyxFQUFDLHVCQUF1QjtFQUFDLGtCQUFnQixFQUFDOzs7Ozs7O3dCQVR4RCxvQkF3Qk0sT0F4Qk4sVUF3Qk07SUF2Qkosb0JBa0JNLE9BbEJOLFVBa0JNO01BakJKLGFBTVE7UUFMTCxrQkFBYyx1Q0FBRSxnQkFBUyxHQUFHLE1BQU07UUFDbkMsSUFBSSxFQUFDLFVBQVU7UUFDZixXQUFXLEVBQUM7O1FBTnBCLGtCQVFRLENBQWlEO1VBQWpELGFBQWlEO1lBQTFDLE9BQU8sRUFBRSxnQkFBUztZQUFFLFNBQVMsRUFBQzs7O1FBUjdDOztNQVVNLG9CQVNNLE9BVE4sVUFTTTtRQVJKLGFBQW1EO1VBQTdDLElBQUksRUFBQyxVQUFVO1VBQUMsV0FBVyxFQUFDOztrQ0FDbEMsb0JBRU87VUFGRCxLQUFLLEVBQUMscUNBQXFDO1VBQUMsa0JBQWdCLEVBQUM7V0FBaUQsc0JBRXBIO2tDQWRSLGlCQWNlLE9BRVA7a0NBQUEsb0JBRU87VUFGRCxLQUFLLEVBQUMscUNBQXFDO1VBQUMsa0JBQWdCLEVBQUM7V0FBaUQsa0JBRXBIOzs7SUFHSixhQUdFO01BRkEsSUFBSSxFQUFDLG9CQUFvQjtNQUN6QixjQUFZLEVBQUMiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkNoZWNrYm94V2l0aFRleHQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvQ2hlY2tib3hXaXRoVGV4dC52dWU6MjozXCI+XG4gICAgPGRpdiBjbGFzcz1cIm1iLTQgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgdGV4dC1jZW50ZXJzXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvbW9sZWN1bGVzL0NoZWNrYm94V2l0aFRleHQudnVlOjM6NVwiPlxuICAgICAgPElucHV0XG4gICAgICAgIEB1cGRhdGU6Y2hlY2tlZD1cImlzQ2hlY2tlZCA9ICRldmVudFwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgIGN1c3RvbUNsYXNzPVwiYm9yZGVyLXdoaXRlLzUwIGhvdmVyOmJvcmRlci13aGl0ZVwiXG4gICAgICA+XG4gICAgICAgIDxJY29uIDp2aXNpYmxlPVwiaXNDaGVja2VkXCIgaWNvbkNsYXNzPVwidGV4dC1zbVwiIC8+XG4gICAgICA8L0lucHV0PlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQteHMgdGV4dC13aGl0ZS83MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9DaGVja2JveFdpdGhUZXh0LnZ1ZToxMTo3XCI+XG4gICAgICAgIDxUZXh0IHRleHQ9XCJJIGFjY2VwdFwiIGN1c3RvbUNsYXNzPVwiaW5saW5lLWJsb2NrXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bmRlcmxpbmUgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlclwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL21vbGVjdWxlcy9DaGVja2JveFdpdGhUZXh0LnZ1ZToxMzo5XCI+XG4gICAgICAgICAgVGVybXMgJiBDb25kaXRpb25zXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgYW5kXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXJcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9tb2xlY3VsZXMvQ2hlY2tib3hXaXRoVGV4dC52dWU6MTc6OVwiPlxuICAgICAgICAgIFByaXZhY3kgUG9saWN5XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxUZXh0XG4gICAgICB0ZXh0PVwiRW50ZXIgeW91ciBkZXRhaWxzXCJcbiAgICAgIGN1c3RvbS1jbGFzcz1cIm1iLTYgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuY29uc3QgaXNDaGVja2VkID0gcmVmKGZhbHNlKTtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9hdG9tcy9UZXh0LnZ1ZVwiO1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvbW9sZWN1bGVzL0NoZWNrYm94V2l0aFRleHQudnVlIn0=