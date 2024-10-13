import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/GPasswordResetTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import { store } from "/_nuxt/store/store.js";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add";
import Text from "/_nuxt/components/atoms/Text.vue";


const _sfc_main = {
  __name: 'GPasswordResetTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

// import NextIconSection from "~/components/molecules/NextIconSection.vue";
const password = ref("");
const confirmPassword = ref("");

const resetPassword = async () => {
  store.resetPassword(password.value, confirmPassword.value);
};

const __returned__ = { password, confirmPassword, resetPassword, InfoBaner, InputBox, ActionButton, get store() { return store }, ref, Text }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/GPasswordResetTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/GPasswordResetTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" <NextIconSection /> "),
      _createVNode($setup["InfoBaner"], {
        "img-src": "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
        title: "Add new password",
        "content-text": "Your account uses\nGoogle sign-in add a new \npassword",
        class: "border border-red-700 p-5 m-5"
      }),
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
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode($setup["InputBox"], {
        modelValue: $setup.confirmPassword,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.confirmPassword) = $event)),
        placeholder: "Confirm password",
        type: "password",
        "icon-class": "fa-key text-base text-black/70"
      }, null, 8 /* PROPS */, ["modelValue"]),
      _createVNode($setup["ActionButton"], {
        onPointerup: $setup.resetPassword,
        text: "Create New Password"
      })
    ])
  ]))
}


_sfc_main.__hmrId = "c68107d1"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/templates/GPasswordResetTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF3Q0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMxRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFOcEMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBUTNFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7OztFQWxERyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBSnhILG9CQWtDTSxPQWxDTixVQWtDTTtJQS9CSixvQkE4Qk0sT0E5Qk4sVUE4Qk07TUEzQkosNENBQTRCO01BQzVCLGFBT0U7UUFOQSxTQUFPLEVBQUMsNkVBQTZFO1FBQ3JGLEtBQUssRUFBQyxrQkFBa0I7UUFDeEIsY0FBWSxFQUFDLHdEQUVaO1FBQ0QsS0FBSyxFQUFDOztNQUVSLGFBQXFFO1FBQS9ELElBQUksRUFBQyxxQkFBcUI7UUFBQyxLQUFLLEVBQUM7O01BQ3ZDLGFBS0U7UUF0QlIsWUFrQmlCLGVBQVE7UUFsQnpCLDZEQWtCaUIsZUFBUTtRQUNqQixXQUFXLEVBQUMsVUFBVTtRQUN0QixJQUFJLEVBQUMsVUFBVTtRQUNmLFlBQVUsRUFBQzs7TUFFYixhQUtFO1FBNUJSLFlBd0JpQixzQkFBZTtRQXhCaEMsNkRBd0JpQixzQkFBZTtRQUN4QixXQUFXLEVBQUMsa0JBQWtCO1FBQzlCLElBQUksRUFBQyxVQUFVO1FBQ2YsWUFBVSxFQUFDOztNQUViLGFBSUU7UUFIQyxXQUFTLEVBQUUsb0JBQWE7UUFDekIsSUFBSSxFQUFDIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJHUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGluc2V0LTAgei01MCBoLWZ1bGwgdy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJnLWJsYWNrIGJhY2tkcm9wLWJsdXItWzVweF0gYmctb3BhY2l0eS01MFwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9HUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyZWxhdGl2ZSB6LTEwIHAtNSBtLTUgdGV4dC0xMyBib3JkZXIgZmxleCBmbGV4LWNvbCBnYXAtOSByb3VuZGVkLWxnIHBvcHVwLWNvbnRlbnQgYmctYmxhY2tcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvR1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWU6NTo1XCJcbiAgICA+XG4gICAgICA8IS0tIDxOZXh0SWNvblNlY3Rpb24gLz4gLS0+XG4gICAgICA8SW5mb0JhbmVyXG4gICAgICAgIGltZy1zcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2MvYzEvR29vZ2xlXyUyMkclMjJfbG9nby5zdmdcIlxuICAgICAgICB0aXRsZT1cIkFkZCBuZXcgcGFzc3dvcmRcIlxuICAgICAgICBjb250ZW50LXRleHQ9XCJZb3VyIGFjY291bnQgdXNlc1xuR29vZ2xlIHNpZ24taW4gYWRkIGEgbmV3IFxucGFzc3dvcmRcIlxuICAgICAgICBjbGFzcz1cImJvcmRlciBib3JkZXItcmVkLTcwMCBwLTUgbS01XCJcbiAgICAgIC8+XG4gICAgICA8VGV4dCB0ZXh0PVwiaW5zZXJ0IG5ldyBwYXNzd29yZFwiIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LWNlbnRlclwiIC8+XG4gICAgICA8SW5wdXRCb3hcbiAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGljb24tY2xhc3M9XCJmYS1rZXkgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEJveFxuICAgICAgICB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgaWNvbi1jbGFzcz1cImZhLWtleSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICAvPlxuICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICBAcG9pbnRlcnVwPVwicmVzZXRQYXNzd29yZFwiXG4gICAgICAgIHRleHQ9XCJDcmVhdGUgTmV3IFBhc3N3b3JkXCJcbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG4vLyBpbXBvcnQgTmV4dEljb25TZWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL05leHRJY29uU2VjdGlvbi52dWVcIjtcbmltcG9ydCBJbmZvQmFuZXIgZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZVwiO1xuaW1wb3J0IElucHV0Qm94IGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0Qm94LnZ1ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcblxuY29uc3QgcGFzc3dvcmQgPSByZWYoXCJcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSByZWYoXCJcIik7XG5cbmNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XG4gIHN0b3JlLnJlc2V0UGFzc3dvcmQocGFzc3dvcmQudmFsdWUsIGNvbmZpcm1QYXNzd29yZC52YWx1ZSk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy90ZW1wbGF0ZXMvR1Bhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWUifQ==