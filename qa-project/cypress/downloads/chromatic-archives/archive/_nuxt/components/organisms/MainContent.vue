import { createHotContext as __vite__createHotContext } from "/_nuxt/@vite/client";import.meta.hot = __vite__createHotContext("/components/organisms/MainContent.vue");/* Injection by vite-plugin-vue-inspector Start */
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
import Header from "/_nuxt/components/atoms/Header.vue";
import Text from "/_nuxt/components/atoms/Text.vue";
import Anchor from "/_nuxt/components/atoms/Anchor.vue";
import RectElement from "/_nuxt/components/atoms/RectElement.vue";

const _sfc_main = {
  __name: 'MainContent',
  setup(__props, { expose: __expose }) {
  __expose();


const __returned__ = { Header, Text, Anchor, RectElement }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

}
import {   openBlock as _openBlock,  } from "/_nuxt/node_modules/.cache/vite/client/deps/vue.js?v=e13b3add"

const _hoisted_1 = {
  id: "page",
  class: "relative min-h-screen pt-14 transition-all duration-200",
  "data-v-inspector": "components/organisms/MainContent.vue:2:3"
}
const _hoisted_2 = {
  class: "relative h-[36rem] overflow-hidden",
  "data-v-inspector": "components/organisms/MainContent.vue:6:5"
}
const _hoisted_3 = {
  class: "z-1 relative flex items-center px-10 pt-40 text-white",
  "data-v-inspector": "components/organisms/MainContent.vue:7:7"
}
const _hoisted_4 = {
  class: "mr-10 flex-1",
  "data-v-inspector": "components/organisms/MainContent.vue:8:9"
}

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _createElementVNode("div", _hoisted_4, [
          _createVNode($setup["Header"], { text: "E-learning Revolution 2" }),
          _createVNode($setup["Text"], {
            text: "We have worked to digitize our school, and give the whole world the opportunity to do it with a new study platform designed for teachers",
            customClass: "mb-5 text-xl"
          }),
          _createVNode($setup["Anchor"], {
            url: "/courses",
            text: "Go to Marketplace"
          })
        ]),
        _createVNode($setup["RectElement"])
      ])
    ])
  ]))
}


_sfc_main.__hmrId = "4939b23a"
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
export default /*#__PURE__*/_export_sfc(_sfc_main, [['render',_sfc_render],['__file',"/home/biniyam/frontend-qa-selection/qa-project/components/organisms/MainContent.vue"]])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFzQkEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2QjlDLEVBQUUsRUFBQyxNQUFNO0VBQ1QsS0FBSyxFQUFDLHlEQUF5RDtFQUFDLGtCQUFnQixFQUFDOzs7RUFFNUUsS0FBSyxFQUFDLG9DQUFvQztFQUFDLGtCQUFnQixFQUFDOzs7RUFDMUQsS0FBSyxFQUFDLHVEQUF1RDtFQUFDLGtCQUFnQixFQUFDOzs7RUFDN0UsS0FBSyxFQUFDLGNBQWM7RUFBQyxrQkFBZ0IsRUFBQzs7Ozt3QkFOakQsb0JBaUJNLE9BakJOLFVBaUJNO0lBYkosb0JBWU0sT0FaTixVQVlNO01BWEosb0JBVU0sT0FWTixVQVVNO1FBVEosb0JBT00sT0FQTixVQU9NO1VBTkosYUFBeUMsb0JBQWpDLElBQUksRUFBQyx5QkFBeUI7VUFDdEMsYUFHRTtZQUZBLElBQUksRUFBQywwSUFBMEk7WUFDL0ksV0FBVyxFQUFDOztVQUVkLGFBQWtEO1lBQTFDLEdBQUcsRUFBQyxVQUFVO1lBQUMsSUFBSSxFQUFDOzs7UUFFOUIsYUFBZSIsIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiTWFpbkNvbnRlbnQudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdlxuICAgIGlkPVwicGFnZVwiXG4gICAgY2xhc3M9XCJyZWxhdGl2ZSBtaW4taC1zY3JlZW4gcHQtMTQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMjAwXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL01haW5Db250ZW50LnZ1ZToyOjNcIlxuICA+XG4gICAgPGRpdiBjbGFzcz1cInJlbGF0aXZlIGgtWzM2cmVtXSBvdmVyZmxvdy1oaWRkZW5cIiBkYXRhLXYtaW5zcGVjdG9yPVwiY29tcG9uZW50cy9vcmdhbmlzbXMvTWFpbkNvbnRlbnQudnVlOjY6NVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInotMSByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBweC0xMCBwdC00MCB0ZXh0LXdoaXRlXCIgZGF0YS12LWluc3BlY3Rvcj1cImNvbXBvbmVudHMvb3JnYW5pc21zL01haW5Db250ZW50LnZ1ZTo3OjdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTEwIGZsZXgtMVwiIGRhdGEtdi1pbnNwZWN0b3I9XCJjb21wb25lbnRzL29yZ2FuaXNtcy9NYWluQ29udGVudC52dWU6ODo5XCI+XG4gICAgICAgICAgPEhlYWRlciB0ZXh0PVwiRS1sZWFybmluZyBSZXZvbHV0aW9uIDJcIiAvPlxuICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICB0ZXh0PVwiV2UgaGF2ZSB3b3JrZWQgdG8gZGlnaXRpemUgb3VyIHNjaG9vbCwgYW5kIGdpdmUgdGhlIHdob2xlIHdvcmxkIHRoZSBvcHBvcnR1bml0eSB0byBkbyBpdCB3aXRoIGEgbmV3IHN0dWR5IHBsYXRmb3JtIGRlc2lnbmVkIGZvciB0ZWFjaGVyc1wiXG4gICAgICAgICAgICBjdXN0b21DbGFzcz1cIm1iLTUgdGV4dC14bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QW5jaG9yIHVybD1cIi9jb3Vyc2VzXCIgdGV4dD1cIkdvIHRvIE1hcmtldHBsYWNlXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxSZWN0RWxlbWVudCAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2F0b21zL0hlYWRlci52dWVcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9hdG9tcy9UZXh0LnZ1ZVwiO1xuaW1wb3J0IEFuY2hvciBmcm9tIFwiLi4vYXRvbXMvQW5jaG9yLnZ1ZVwiO1xuaW1wb3J0IFJlY3RFbGVtZW50IGZyb20gXCIuLi9hdG9tcy9SZWN0RWxlbWVudC52dWVcIjtcbjwvc2NyaXB0PlxuIl0sImZpbGUiOiIvaG9tZS9iaW5peWFtL2Zyb250ZW5kLXFhLXNlbGVjdGlvbi9xYS1wcm9qZWN0L2NvbXBvbmVudHMvb3JnYW5pc21zL01haW5Db250ZW50LnZ1ZSJ9