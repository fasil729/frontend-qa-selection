import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/PasswordResetTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import NextIconSection from "/_nuxt/components/molecules/NextIconSection.vue";
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import { store } from "/_nuxt/store/store.js";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";


const _sfc_main = {
  __name: 'PasswordResetTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

const password = ref("");
const confirmPassword = ref("");

const resetPassword = async () => {
  store.resetPassword(password.value, confirmPassword.value);
};

const __returned__ = { password, confirmPassword, resetPassword, Text, NextIconSection, InfoBaner, InputBox, ActionButton, get store() { return store }, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/PasswordResetTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/PasswordResetTemplate.vue:5:5"
}
const _hoisted_3 = {
  class: "text-nowrap",
  "data-v-inspector": "components/templates/PasswordResetTemplate.vue:15:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["NextIconSection"]),
      _createVNode($setup["InfoBaner"], {
        title: "Add new password",
        "content-text": "retrieve Your password\naccount through your\nregistration mail"
      }),
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["Text"], {
          text: "insert new password",
          class: "text-white/70 text-center"
        }),
        _createVNode($setup["InputBox"], {
          modelValue: $setup.password,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.password) = $event)),
          placeholder: "Password",
          type: "password",
          "icon-class": "fa-key text-base text-black/70"
        }, null, 8 /* PROPS */, ["modelValue"])
      ]),
      _createVNode($setup["InputBox"], {
        modelValue: $setup.confirmPassword,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.confirmPassword) = $event)),
        placeholder: "Confirm password",
        type: "password",
        "icon-class": "fa-key text-base text-black/70"
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode($setup["ActionButton"], {
        onPointerup: $setup.resetPassword,
        text: "Cerate New Password"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "7b8c0aa2"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/PasswordResetTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFvQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUM7QUFDeEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMxRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7O0FBRXpCLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7OztFQS9DRyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7OztFQVMvRyxLQUFLLEVBQUMsYUFBYTtFQUFDLGtCQUFnQixFQUFDOzs7O3dCQWI5QyxvQkErQk0sT0EvQk4sVUErQk07SUE1Qkosb0JBMkJNLE9BM0JOLFVBMkJNO01BeEJKLGFBQW1CO01BQ25CLGFBS0U7UUFKQSxLQUFLLEVBQUMsa0JBQWtCO1FBQ3hCLGNBQVksRUFBQzs7TUFJZixvQkFRTSxPQVJOLFVBUU07UUFQSixhQUFxRTtVQUEvRCxJQUFJLEVBQUMscUJBQXFCO1VBQUMsS0FBSyxFQUFDOztRQUN2QyxhQUtFO1VBckJWLFlBaUJtQixlQUFRO1VBakIzQiw2REFpQm1CLGVBQVE7VUFDakIsV0FBVyxFQUFDLFVBQVU7VUFDdEIsSUFBSSxFQUFDLFVBQVU7VUFDZixZQUFVLEVBQUM7OztNQUdmLGFBS0U7UUE1QlIsWUF3QmlCLHNCQUFlO1FBeEJoQyw2REF3QmlCLHNCQUFlO1FBQ3hCLFdBQVcsRUFBQyxrQkFBa0I7UUFDOUIsSUFBSSxFQUFDLFVBQVU7UUFDZixZQUFVLEVBQUM7O01BR2IsYUFBc0U7UUFBdkQsV0FBUyxFQUFFLG9CQUFhO1FBQUUsSUFBSSxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmFja2Ryb3AtYmx1ci1bNXB4XSBiZy1vcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTkgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWU6NTo1XCJcbiAgICA+XG4gICAgICA8TmV4dEljb25TZWN0aW9uIC8+XG4gICAgICA8SW5mb0JhbmVyXG4gICAgICAgIHRpdGxlPVwiQWRkIG5ldyBwYXNzd29yZFwiXG4gICAgICAgIGNvbnRlbnQtdGV4dD1cInJldHJpZXZlIFlvdXIgcGFzc3dvcmRcbmFjY291bnQgdGhyb3VnaCB5b3VyXG5yZWdpc3RyYXRpb24gbWFpbFwiXG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzcz1cInRleHQtbm93cmFwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWU6MTU6N1wiPlxuICAgICAgICA8VGV4dCB0ZXh0PVwiaW5zZXJ0IG5ldyBwYXNzd29yZFwiIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LWNlbnRlclwiIC8+XG4gICAgICAgIDxJbnB1dEJveFxuICAgICAgICAgIHYtbW9kZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICBpY29uLWNsYXNzPVwiZmEta2V5IHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPElucHV0Qm94XG4gICAgICAgIHYtbW9kZWw9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBpY29uLWNsYXNzPVwiZmEta2V5IHRleHQtYmFzZSB0ZXh0LWJsYWNrLzcwXCJcbiAgICAgIC8+XG5cbiAgICAgIDxBY3Rpb25CdXR0b24gQHBvaW50ZXJ1cD1cInJlc2V0UGFzc3dvcmRcIiB0ZXh0PVwiQ2VyYXRlIE5ldyBQYXNzd29yZFwiIC8+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBUZXh0IGZyb20gXCIuLi9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IE5leHRJY29uU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9OZXh0SWNvblNlY3Rpb24udnVlXCI7XG5pbXBvcnQgSW5mb0JhbmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWVcIjtcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEJveC52dWVcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvQWN0aW9uQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSBcInZ1ZVwiO1xuXG5jb25zdCBwYXNzd29yZCA9IHJlZihcIlwiKTtcbmNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IHJlZihcIlwiKTtcblxuY29uc3QgcmVzZXRQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcbiAgc3RvcmUucmVzZXRQYXNzd29yZChwYXNzd29yZC52YWx1ZSwgY29uZmlybVBhc3N3b3JkLnZhbHVlKTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZSJ9