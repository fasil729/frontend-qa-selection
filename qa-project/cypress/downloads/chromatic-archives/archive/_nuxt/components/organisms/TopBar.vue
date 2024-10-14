import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/TopBar.vue");/* Injection by vite-plugin-vue-inspector Start */
import { createElementVNode as __createElementVNode,createVNode as __createVNode,createElementBlock as __createElementBlock } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"
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
import { store } from "/_nuxt/store/store.js";
import SearchBar from "/_nuxt/components/molecules/SearchBar.vue";
import ButtonWithIcon from "/_nuxt/components/molecules/ButtonWithIcon.vue";


const _sfc_main = {
  __name: 'TopBar',
  setup(__props, { expose: __expose }) {
  __expose();

const logout = async () => {
  store.resetStore();
};

const __returned__ = { logout, get store() { return store }, SearchBar, ButtonWithIcon }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {  createCommentVNode as _createCommentVNode,  openBlock as _openBlock, createBlock as _createBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=165aa77d"

const _hoisted_1 = {
  class: "fixed left-0 right-0 top-0 z-[60] flex h-14 w-full items-center justify-between gap-2 bg-[#060606] px-4 py-2",
  "data-v-inspector": "components/organisms/TopBar.vue:3:3"
}
const _hoisted_2 = {
  class: "pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center justify-center",
  "data-v-inspector": "components/organisms/TopBar.vue:9:5"
}
const _hoisted_3 = {
  id: "search",
  class: "w-3/5 sm:w-1/3 pointer-events-auto relative h-full rounded-md pt-2 transition-all",
  "data-v-inspector": "components/organisms/TopBar.vue:12:7"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[0] || (_cache[0] = _createElementVNode("div", {
      class: "flex items-center gap-4 md:pl-20 text-white",
      "data-v-inspector": "components/organisms/TopBar.vue:6:5"
    }, null, -1 /* HOISTED */)),
    _createCommentVNode(" Centered SearchBar "),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createVNode($setup["SearchBar"])
      ])
    ]),
    (!$setup.store.isUserLoggedIn)
      ? (_openBlock(), _createBlock($setup["ButtonWithIcon"], {
          key: 0,
          iconClass: "fa-user-plus",
          text: "Join Us",
          onPointerup: $setup.store.togglePopUp
        }, null, 8 /* PROPS */, ["onPointerup"]))
      : _createCommentVNode("v-if", true),
    ($setup.store.isUserLoggedIn)
      ? (_openBlock(), _createBlock($setup["ButtonWithIcon"], {
          key: 1,
          iconClass: "fa-right-from-bracket",
          text: "Logout",
          onPointerup: $setup.logout
        }))
      : _createCommentVNode("v-if", true)
  ]))
}


_sfc_main.__hmrId = "dc1f94d6"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/aladia/frontend-qa-selection/qa-project/components/organisms/TopBar.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFrQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUM7QUFDbEQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFFNUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDcEIsQ0FBQzs7Ozs7Ozs7Ozs7RUFyQ0csS0FBSyxFQUFDLDhHQUE4RztFQUFDLGtCQUFnQixFQUFDOzs7RUFNcEksS0FBSyxFQUFDLDBGQUEwRjtFQUFDLGtCQUFnQixFQUFDOzs7RUFHaEgsRUFBRSxFQUFDLFFBQVE7RUFDWCxLQUFLLEVBQUMsbUZBQW1GO0VBQUMsa0JBQWdCLEVBQUM7Ozs7d0JBWGpILG9CQTRCTSxPQTVCTixVQTRCTTs4QkF6Qkosb0JBQXNIO01BQWpILEtBQUssRUFBQyw2Q0FBNkM7TUFBQyxrQkFBZ0IsRUFBQzs7SUFFMUUsMkNBQTJCO0lBQzNCLG9CQVNNLE9BVE4sVUFTTTtNQU5KLG9CQUtNLE9BTE4sVUFLTTtRQURKLGFBQWE7OztNQUlSLFlBQUssQ0FBQyxjQUFjO3VCQUQ3QixhQUtFO1VBdkJOO1VBb0JNLFNBQVMsRUFBQyxjQUFjO1VBQ3hCLElBQUksRUFBQyxTQUFTO1VBQ2IsV0FBUyxFQUFFLFlBQUssQ0FBQzs7UUF0QnhCO0tBeUJZLFlBQUssQ0FBQyxjQUFjO3VCQUQ1QixhQUtFO1VBN0JOO1VBMEJNLFNBQVMsRUFBQyx1QkFBdUI7VUFDakMsSUFBSSxFQUFDLFFBQVE7VUFDWixXQUFTLEVBQUU7O1FBNUJsQiIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiVG9wQmFyLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8IS0tIGNvbXBvbmVudHMvb3JnYW5pc21zL1RvcEJhci52dWUgLS0+XG48dGVtcGxhdGU+XG4gIDxkaXZcbiAgICBjbGFzcz1cImZpeGVkIGxlZnQtMCByaWdodC0wIHRvcC0wIHotWzYwXSBmbGV4IGgtMTQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLTIgYmctWyMwNjA2MDZdIHB4LTQgcHktMlwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Ub3BCYXIudnVlOjM6M1wiXG4gID5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgbWQ6cGwtMjAgdGV4dC13aGl0ZVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9Ub3BCYXIudnVlOjY6NVwiPjwvZGl2PlxuXG4gICAgPCEtLSBDZW50ZXJlZCBTZWFyY2hCYXIgLS0+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGluc2V0LTAgei0xMCBmbGV4IGgtZnVsbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL1RvcEJhci52dWU6OTo1XCJcbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGlkPVwic2VhcmNoXCJcbiAgICAgICAgY2xhc3M9XCJ3LTMvNSBzbTp3LTEvMyBwb2ludGVyLWV2ZW50cy1hdXRvIHJlbGF0aXZlIGgtZnVsbCByb3VuZGVkLW1kIHB0LTIgdHJhbnNpdGlvbi1hbGxcIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvVG9wQmFyLnZ1ZToxMjo3XCJcbiAgICAgID5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPEJ1dHRvbldpdGhJY29uXG4gICAgICB2LWlmPVwiIXN0b3JlLmlzVXNlckxvZ2dlZEluXCJcbiAgICAgIGljb25DbGFzcz1cImZhLXVzZXItcGx1c1wiXG4gICAgICB0ZXh0PVwiSm9pbiBVc1wiXG4gICAgICBAcG9pbnRlcnVwPVwic3RvcmUudG9nZ2xlUG9wVXBcIlxuICAgIC8+XG4gICAgPEJ1dHRvbldpdGhJY29uXG4gICAgICB2LWlmPVwic3RvcmUuaXNVc2VyTG9nZ2VkSW5cIlxuICAgICAgaWNvbkNsYXNzPVwiZmEtcmlnaHQtZnJvbS1icmFja2V0XCJcbiAgICAgIHRleHQ9XCJMb2dvdXRcIlxuICAgICAgQHBvaW50ZXJ1cD1cImxvZ291dFwiXG4gICAgLz5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0IHNldHVwPlxuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwifi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi4vbW9sZWN1bGVzL1NlYXJjaEJhci52dWVcIjtcbmltcG9ydCBCdXR0b25XaXRoSWNvbiBmcm9tIFwiLi4vbW9sZWN1bGVzL0J1dHRvbldpdGhJY29uLnZ1ZVwiO1xuXG5jb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gIHN0b3JlLnJlc2V0U3RvcmUoKTtcbn07XG48L3NjcmlwdD5cbiJdLCJmaWxlIjoiL2hvbWUvYmluaXlhbS9hbGFkaWEvZnJvbnRlbmQtcWEtc2VsZWN0aW9uL3FhLXByb2plY3QvY29tcG9uZW50cy9vcmdhbmlzbXMvVG9wQmFyLnZ1ZSJ9