import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/FPasswordResetTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import InfoBaner from "/_nuxt/components/molecules/InfoBaner.vue";
import InputBox from "/_nuxt/components/molecules/InputBox.vue";
import ActionButton from "/_nuxt/components/molecules/ActionButton.vue";
import { store } from "/_nuxt/store/store.js";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";
import Text from "/_nuxt/components/atoms/Text.vue";


const _sfc_main = {
  __name: 'FPasswordResetTemplate',
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
import { createCommentVNode as _createCommentVNode,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/FPasswordResetTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/FPasswordResetTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" <NextIconSection /> "),
      _createVNode($setup["InfoBaner"], {
        "img-src": "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
        title: "Add new password",
        "content-text": "Your account uses\nFaceBook sign-in add a new \npassword",
        "custom-class": "border border-blue-700 p-5 m-5"
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
        text: "Create New Password",
        onPointerup: $setup.resetPassword
      })
    ])
  ]))
}


_sfc_main.__hmrId = "55eba3fb"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/FPasswordResetTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMxRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUM7QUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFOcEMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBUTNFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7OztFQW5ERyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBSnhILG9CQW1DTSxPQW5DTixVQW1DTTtJQWhDSixvQkErQk0sT0EvQk4sVUErQk07TUE1QkosNENBQTRCO01BRTVCLGFBT0U7UUFOQSxTQUFPLEVBQUMsNEVBQTRFO1FBQ3BGLEtBQUssRUFBQyxrQkFBa0I7UUFDeEIsY0FBWSxFQUFDLDBEQUVaO1FBQ0QsY0FBWSxFQUFDOztNQUVmLGFBQXFFO1FBQS9ELElBQUksRUFBQyxxQkFBcUI7UUFBQyxLQUFLLEVBQUM7O01BQ3ZDLGFBS0U7UUF2QlIsWUFtQmlCLGVBQVE7UUFuQnpCLDZEQW1CaUIsZUFBUTtRQUNqQixXQUFXLEVBQUMsVUFBVTtRQUN0QixJQUFJLEVBQUMsVUFBVTtRQUNmLFlBQVUsRUFBQzs7TUFFYixhQUtFO1FBN0JSLFlBeUJpQixzQkFBZTtRQXpCaEMsNkRBeUJpQixzQkFBZTtRQUN4QixXQUFXLEVBQUMsa0JBQWtCO1FBQzlCLElBQUksRUFBQyxVQUFVO1FBQ2YsWUFBVSxFQUFDOztNQUViLGFBSUU7UUFIQSxJQUFJLEVBQUMscUJBQXFCO1FBQ3pCLFdBQVMsRUFBRSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiRlBhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgY2xhc3M9XCJmaXhlZCBpbnNldC0wIHotNTAgaC1mdWxsIHctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiYWNrZHJvcC1ibHVyLVs1cHhdIGJnLW9wYWNpdHktNTBcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy90ZW1wbGF0ZXMvRlBhc3N3b3JkUmVzZXRUZW1wbGF0ZS52dWU6MjozXCJcbiAgPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwicmVsYXRpdmUgei0xMCBwLTUgbS01IHRleHQtMTMgYm9yZGVyIGZsZXggZmxleC1jb2wgZ2FwLTkgcm91bmRlZC1sZyBwb3B1cC1jb250ZW50IGJnLWJsYWNrXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0ZQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlOjU6NVwiXG4gICAgPlxuICAgICAgPCEtLSA8TmV4dEljb25TZWN0aW9uIC8+IC0tPlxuXG4gICAgICA8SW5mb0JhbmVyXG4gICAgICAgIGltZy1zcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2IvYjkvMjAyM19GYWNlYm9va19pY29uLnN2Z1wiXG4gICAgICAgIHRpdGxlPVwiQWRkIG5ldyBwYXNzd29yZFwiXG4gICAgICAgIGNvbnRlbnQtdGV4dD1cIllvdXIgYWNjb3VudCB1c2VzXG5GYWNlQm9vayBzaWduLWluIGFkZCBhIG5ldyBcbnBhc3N3b3JkXCJcbiAgICAgICAgY3VzdG9tLWNsYXNzPVwiYm9yZGVyIGJvcmRlci1ibHVlLTcwMCBwLTUgbS01XCJcbiAgICAgIC8+XG4gICAgICA8VGV4dCB0ZXh0PVwiaW5zZXJ0IG5ldyBwYXNzd29yZFwiIGNsYXNzPVwidGV4dC13aGl0ZS83MCB0ZXh0LWNlbnRlclwiIC8+XG4gICAgICA8SW5wdXRCb3hcbiAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGljb24tY2xhc3M9XCJmYS1rZXkgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEJveFxuICAgICAgICB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgaWNvbi1jbGFzcz1cImZhLWtleSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICAvPlxuICAgICAgPEFjdGlvbkJ1dHRvblxuICAgICAgICB0ZXh0PVwiQ3JlYXRlIE5ldyBQYXNzd29yZFwiXG4gICAgICAgIEBwb2ludGVydXA9XCJyZXNldFBhc3N3b3JkXCJcbiAgICAgICAgXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG4vLyBpbXBvcnQgTmV4dEljb25TZWN0aW9uIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL05leHRJY29uU2VjdGlvbi52dWVcIjtcbmltcG9ydCBJbmZvQmFuZXIgZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvSW5mb0JhbmVyLnZ1ZVwiO1xuaW1wb3J0IElucHV0Qm94IGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0lucHV0Qm94LnZ1ZVwiO1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9BY3Rpb25CdXR0b24udnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcblxuY29uc3QgcGFzc3dvcmQgPSByZWYoXCJcIik7XG5jb25zdCBjb25maXJtUGFzc3dvcmQgPSByZWYoXCJcIik7XG5cbmNvbnN0IHJlc2V0UGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XG4gIHN0b3JlLnJlc2V0UGFzc3dvcmQocGFzc3dvcmQudmFsdWUsIGNvbmZpcm1QYXNzd29yZC52YWx1ZSk7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vYWxhZGlhL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvdGVtcGxhdGVzL0ZQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlIn0=