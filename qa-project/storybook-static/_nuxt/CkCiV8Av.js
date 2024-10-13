import{_ as r}from"./CtXiy-54.js";import"./Bp0l9591.js";const i={title:"Atoms/DecorativeLine",component:r,tags:["autodocs"],argTypes:{customClass:{control:"text",description:"Custom CSS classes for the decorative line"}}},e={args:{customClass:"bg-gradient-to-l from-white/0 to-white absolute bottom-0 left-0 right-0 h-[1px] w-full"},render:a=>({components:{DecorativeLine:r},setup(){return{args:a}},template:'<DecorativeLine :class="args.customClass" />'})};var t,o,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    customClass: 'bg-gradient-to-l from-white/0 to-white absolute bottom-0 left-0 right-0 h-[1px] w-full'
  },
  render: args => ({
    components: {
      DecorativeLine
    },
    setup() {
      return {
        args
      };
    },
    template: '<DecorativeLine :class="args.customClass" />'
  })
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const m=["DecorativeLineStory"];export{e as DecorativeLineStory,m as __namedExportsOrder,i as default};
