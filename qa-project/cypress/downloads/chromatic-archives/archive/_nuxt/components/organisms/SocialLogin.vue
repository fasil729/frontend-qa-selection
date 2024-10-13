import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/SocialLogin.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import Text from "/_nuxt/components/atoms/Text.vue";
import SocialButton from "/_nuxt/components/molecules/SocialButton.vue";
import { store } from "/_nuxt/store/store.js"; // Import the store for access

// Handle social login click event

const _sfc_main = {
  __name: 'SocialLogin',
  setup(__props, { expose: __expose }) {
  __expose();

const handleSocialLogin = (provider) => {
  store.socialLogin(provider);
};

const __returned__ = { handleSocialLogin, Text, SocialButton, get store() { return store } }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = { "data-v-inspector": "components/organisms/SocialLogin.vue:2:3" }
const _hoisted_2 = {
  class: "mb-8 flex w-full flex-col gap-4",
  "data-v-inspector": "components/organisms/SocialLogin.vue:3:5"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createVNode($setup["SocialButton"], {
        id: "googlepage",
        iconSrc: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg",
        altText: "Google Icon",
        buttonText: "Continue with Google",
        onClick: _cache[0] || (_cache[0] = $event => ($setup.handleSocialLogin('google')))
      }),
      _createVNode($setup["SocialButton"], {
        id: "facebookpage",
        iconSrc: "https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg",
        altText: "Facebook Icon",
        buttonText: "Continue with Facebook",
        onClick: _cache[1] || (_cache[1] = $event => ($setup.handleSocialLogin('facebook')))
      }),
      _createVNode($setup["SocialButton"], {
        id: "applepage",
        iconSrc: "https://upload.wikimedia.org/wikipedia/commons/archive/3/31/20201228132320%21Apple_logo_white.svg",
        altText: "Apple Icon",
        buttonText: "Continue with Apple",
        onClick: _cache[2] || (_cache[2] = $event => ($setup.handleSocialLogin('apple')))
      })
    ]),
    _createVNode($setup["Text"], {
      text: " Terms & Conditions ",
      class: "cursor-pointer text-center text-white/40"
    })
  ]))
}


_sfc_main.__hmrId = "828c0f7c"
typeof __VUE_HMR_RUNTIME__ !== 'undefined' && __VUE_HMR_RUNTIME__.createRecord(_sfc_main.__hmrId, _sfc_main)
export const _rerender_only = true
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/SocialLogin.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDO0FBQ3hELE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztBQUUvRCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7Ozs7Ozs7QUFDN0IsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztBQUM3QixDQUFDOzs7Ozs7Ozs7O3FCQXZDTSxrQkFBZ0IsRUFBQywwQ0FBMEM7O0VBQ3pELEtBQUssRUFBQyxpQ0FBaUM7RUFBQyxrQkFBZ0IsRUFBQzs7Ozt3QkFEaEUsb0JBNEJNLE9BNUJOLFVBNEJNO0lBM0JKLG9CQXNCTSxPQXRCTixVQXNCTTtNQXJCSixhQU1FO1FBTEEsRUFBRSxFQUFDLFlBQVk7UUFDZixPQUFPLEVBQUMsNkVBQTZFO1FBQ3JGLE9BQU8sRUFBQyxhQUFhO1FBQ3JCLFVBQVUsRUFBQyxzQkFBc0I7UUFDaEMsT0FBSyx1Q0FBRSx3QkFBaUI7O01BRTNCLGFBTUU7UUFMQSxFQUFFLEVBQUMsY0FBYztRQUNqQixPQUFPLEVBQUMsNEVBQTRFO1FBQ3BGLE9BQU8sRUFBQyxlQUFlO1FBQ3ZCLFVBQVUsRUFBQyx3QkFBd0I7UUFDbEMsT0FBSyx1Q0FBRSx3QkFBaUI7O01BRTNCLGFBTUU7UUFMQSxFQUFFLEVBQUMsV0FBVztRQUNkLE9BQU8sRUFBQyxtR0FBbUc7UUFDM0csT0FBTyxFQUFDLFlBQVk7UUFDcEIsVUFBVSxFQUFDLHFCQUFxQjtRQUMvQixPQUFLLHVDQUFFLHdCQUFpQjs7O0lBRzdCLGFBR0U7TUFGQSxJQUFJLEVBQUMsc0JBQTBCO01BQy9CLEtBQUssRUFBQyIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiU29jaWFsTG9naW4udnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvU29jaWFsTG9naW4udnVlOjI6M1wiPlxuICAgIDxkaXYgY2xhc3M9XCJtYi04IGZsZXggdy1mdWxsIGZsZXgtY29sIGdhcC00XCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL1NvY2lhbExvZ2luLnZ1ZTozOjVcIj5cbiAgICAgIDxTb2NpYWxCdXR0b25cbiAgICAgICAgaWQ9XCJnb29nbGVwYWdlXCJcbiAgICAgICAgaWNvblNyYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jMS9Hb29nbGVfJTIyRyUyMl9sb2dvLnN2Z1wiXG4gICAgICAgIGFsdFRleHQ9XCJHb29nbGUgSWNvblwiXG4gICAgICAgIGJ1dHRvblRleHQ9XCJDb250aW51ZSB3aXRoIEdvb2dsZVwiXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNvY2lhbExvZ2luKCdnb29nbGUnKVwiXG4gICAgICAvPlxuICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICBpZD1cImZhY2Vib29rcGFnZVwiXG4gICAgICAgIGljb25TcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2IvYjkvMjAyM19GYWNlYm9va19pY29uLnN2Z1wiXG4gICAgICAgIGFsdFRleHQ9XCJGYWNlYm9vayBJY29uXCJcbiAgICAgICAgYnV0dG9uVGV4dD1cIkNvbnRpbnVlIHdpdGggRmFjZWJvb2tcIlxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVTb2NpYWxMb2dpbignZmFjZWJvb2snKVwiXG4gICAgICAvPlxuICAgICAgPFNvY2lhbEJ1dHRvblxuICAgICAgICBpZD1cImFwcGxlcGFnZVwiXG4gICAgICAgIGljb25TcmM9XCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL2FyY2hpdmUvMy8zMS8yMDIwMTIyODEzMjMyMCUyMUFwcGxlX2xvZ29fd2hpdGUuc3ZnXCJcbiAgICAgICAgYWx0VGV4dD1cIkFwcGxlIEljb25cIlxuICAgICAgICBidXR0b25UZXh0PVwiQ29udGludWUgd2l0aCBBcHBsZVwiXG4gICAgICAgIEBjbGljaz1cImhhbmRsZVNvY2lhbExvZ2luKCdhcHBsZScpXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPFRleHRcbiAgICAgIHRleHQ9XCIgVGVybXMgJmFtcDsgQ29uZGl0aW9ucyBcIlxuICAgICAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlLzQwXCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi4vYXRvbXMvVGV4dC52dWVcIjtcbmltcG9ydCBTb2NpYWxCdXR0b24gZnJvbSBcIi4uL21vbGVjdWxlcy9Tb2NpYWxCdXR0b24udnVlXCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCJ+L3N0b3JlL3N0b3JlXCI7IC8vIEltcG9ydCB0aGUgc3RvcmUgZm9yIGFjY2Vzc1xuXG4vLyBIYW5kbGUgc29jaWFsIGxvZ2luIGNsaWNrIGV2ZW50XG5jb25zdCBoYW5kbGVTb2NpYWxMb2dpbiA9IChwcm92aWRlcikgPT4ge1xuICBzdG9yZS5zb2NpYWxMb2dpbihwcm92aWRlcik7XG59O1xuPC9zY3JpcHQ+XG4iXSwiZmlsZSI6Ii9ob21lL2Jpbml5YW0vZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9vcmdhbmlzbXMvU29jaWFsTG9naW4udnVlIn0=