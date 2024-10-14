import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/templates/APasswordResetTemplate.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import Text from "/_nuxt/components/atoms/Text.vue";
import { store } from "/_nuxt/store/store.js";
import { ref } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d";


const _sfc_main = {
  __name: 'APasswordResetTemplate',
  setup(__props, { expose: __expose }) {
  __expose();

// import NextIconSection from "~/components/molecules/NextIconSection.vue";
const password = ref("");
const confirmPassword = ref("");

const resetPassword = async () => {
  store.resetPassword(password.value, confirmPassword.value);
};

const __returned__ = { password, confirmPassword, resetPassword, InfoBaner, InputBox, ActionButton, Text, get store() { return store }, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import { createCommentVNode as _createCommentVNode,   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed inset-0 z-50 h-full w-full flex items-center justify-center bg-black backdrop-blur-[5px] bg-opacity-50",
  "data-v-inspector": "components/templates/APasswordResetTemplate.vue:2:3"
}
const _hoisted_2 = {
  class: "relative z-10 p-5 m-5 text-13 border flex flex-col gap-9 rounded-lg popup-content bg-black",
  "data-v-inspector": "components/templates/APasswordResetTemplate.vue:5:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createCommentVNode(" <NextIconSection /> "),
      _createVNode($setup["InfoBaner"], {
        "img-src": "https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg",
        title: "Add new password",
        "content-text": "Your account uses\nApple sign-in add a new \npassword",
        "custom-class": "border border-white p-5 m-5"
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


_sfc_main.__hmrId = "5f5fae31"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/templates/APasswordResetTemplate.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztBQUMxRCxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7QUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDckMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFOekIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDO0FBUTNFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN4QixLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRS9CLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztBQUM1RCxDQUFDOzs7Ozs7Ozs7OztFQS9DRyxLQUFLLEVBQUMsOEdBQThHO0VBQUMsa0JBQWdCLEVBQUM7OztFQUdwSSxLQUFLLEVBQUMsNEZBQTRGO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBSnhILG9CQStCTSxPQS9CTixVQStCTTtJQTVCSixvQkEyQk0sT0EzQk4sVUEyQk07TUF4QkosNENBQTRCO01BQzVCLGFBT0U7UUFOQSxTQUFPLEVBQUMsbUdBQW1HO1FBQzNHLEtBQUssRUFBQyxrQkFBa0I7UUFDeEIsY0FBWSxFQUFDLHVEQUVaO1FBQ0QsY0FBWSxFQUFDOztNQUVmLGFBQXFFO1FBQS9ELElBQUksRUFBQyxxQkFBcUI7UUFBQyxLQUFLLEVBQUM7O01BRXZDLGFBS0U7UUF2QlIsWUFtQmlCLGVBQVE7UUFuQnpCLDZEQW1CaUIsZUFBUTtRQUNqQixXQUFXLEVBQUMsVUFBVTtRQUN0QixJQUFJLEVBQUMsVUFBVTtRQUNmLFlBQVUsRUFBQzs7TUFFYixhQUtFO1FBN0JSLFlBeUJpQixzQkFBZTtRQXpCaEMsNkRBeUJpQixzQkFBZTtRQUN4QixXQUFXLEVBQUMsa0JBQWtCO1FBQzlCLElBQUksRUFBQyxVQUFVO1FBQ2YsWUFBVSxFQUFDOztNQUViLGFBQXNFO1FBQXhELElBQUksRUFBQyxxQkFBcUI7UUFBRSxXQUFTLEVBQUUiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIkFQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiZml4ZWQgaW5zZXQtMCB6LTUwIGgtZnVsbCB3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctYmxhY2sgYmFja2Ryb3AtYmx1ci1bNXB4XSBiZy1vcGFjaXR5LTUwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvdGVtcGxhdGVzL0FQYXNzd29yZFJlc2V0VGVtcGxhdGUudnVlOjI6M1wiXG4gID5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJlbGF0aXZlIHotMTAgcC01IG0tNSB0ZXh0LTEzIGJvcmRlciBmbGV4IGZsZXgtY29sIGdhcC05IHJvdW5kZWQtbGcgcG9wdXAtY29udGVudCBiZy1ibGFja1wiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZTo1OjVcIlxuICAgID5cbiAgICAgIDwhLS0gPE5leHRJY29uU2VjdGlvbiAvPiAtLT5cbiAgICAgIDxJbmZvQmFuZXJcbiAgICAgICAgaW1nLXNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYXJjaGl2ZS8zLzMxLzIwMjAxMjI4MTMyMzIwJTIxQXBwbGVfbG9nb193aGl0ZS5zdmdcIlxuICAgICAgICB0aXRsZT1cIkFkZCBuZXcgcGFzc3dvcmRcIlxuICAgICAgICBjb250ZW50LXRleHQ9XCJZb3VyIGFjY291bnQgdXNlc1xuQXBwbGUgc2lnbi1pbiBhZGQgYSBuZXcgXG5wYXNzd29yZFwiXG4gICAgICAgIGN1c3RvbS1jbGFzcz1cImJvcmRlciBib3JkZXItd2hpdGUgcC01IG0tNVwiXG4gICAgICAvPlxuICAgICAgPFRleHQgdGV4dD1cImluc2VydCBuZXcgcGFzc3dvcmRcIiBjbGFzcz1cInRleHQtd2hpdGUvNzAgdGV4dC1jZW50ZXJcIiAvPlxuXG4gICAgICA8SW5wdXRCb3hcbiAgICAgICAgdi1tb2RlbD1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGljb24tY2xhc3M9XCJmYS1rZXkgdGV4dC1iYXNlIHRleHQtYmxhY2svNzBcIlxuICAgICAgLz5cbiAgICAgIDxJbnB1dEJveFxuICAgICAgICB2LW1vZGVsPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgaWNvbi1jbGFzcz1cImZhLWtleSB0ZXh0LWJhc2UgdGV4dC1ibGFjay83MFwiXG4gICAgICAvPlxuICAgICAgPEFjdGlvbkJ1dHRvbiB0ZXh0PVwiQ3JlYXRlIE5ldyBQYXNzd29yZFwiIEBwb2ludGVydXA9XCJyZXNldFBhc3N3b3JkXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuLy8gaW1wb3J0IE5leHRJY29uU2VjdGlvbiBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9OZXh0SWNvblNlY3Rpb24udnVlXCI7XG5pbXBvcnQgSW5mb0JhbmVyIGZyb20gXCJ+L2NvbXBvbmVudHMvbW9sZWN1bGVzL0luZm9CYW5lci52dWVcIjtcbmltcG9ydCBJbnB1dEJveCBmcm9tIFwifi9jb21wb25lbnRzL21vbGVjdWxlcy9JbnB1dEJveC52dWVcIjtcbmltcG9ydCBBY3Rpb25CdXR0b24gZnJvbSBcIn4vY29tcG9uZW50cy9tb2xlY3VsZXMvQWN0aW9uQnV0dG9uLnZ1ZVwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4uL2F0b21zL1RleHQudnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5cbmNvbnN0IHBhc3N3b3JkID0gcmVmKFwiXCIpO1xuY29uc3QgY29uZmlybVBhc3N3b3JkID0gcmVmKFwiXCIpO1xuXG5jb25zdCByZXNldFBhc3N3b3JkID0gYXN5bmMgKCkgPT4ge1xuICBzdG9yZS5yZXNldFBhc3N3b3JkKHBhc3N3b3JkLnZhbHVlLCBjb25maXJtUGFzc3dvcmQudmFsdWUpO1xufTtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2FsYWRpYS9mcm9udGVuZC1xYS1zZWxlY3Rpb24vcWEtcHJvamVjdC9jb21wb25lbnRzL3RlbXBsYXRlcy9BUGFzc3dvcmRSZXNldFRlbXBsYXRlLnZ1ZSJ9