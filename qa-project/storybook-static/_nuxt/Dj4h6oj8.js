import{_ as s}from"./DgjYA81y.js";import"./Bp0l9591.js";const l={title:"Atoms/Anchor",component:s,tags:["autodocs"],argTypes:{url:{control:"text",description:"The URL that the anchor tag will point to."},text:{control:"text",description:"The text displayed inside the anchor."},customClass:{control:"text",description:"The CSS class applied to the anchor element."}}},t={args:{url:"https://www.google.com",text:"Google",customClass:"inline-block cursor-pointer rounded-md bg-black px-4 py-3 text-white"},render:n=>({components:{Anchor:s},setup(){return{args:n}},template:'<Anchor :url="args.url" :text="args.text" :class="args.customClass" />'})};var e,o,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    url: 'https://www.google.com',
    text: 'Google',
    customClass: 'inline-block cursor-pointer rounded-md bg-black px-4 py-3 text-white'
  },
  render: args => ({
    components: {
      Anchor
    },
    setup() {
      return {
        args
      };
    },
    template: '<Anchor :url="args.url" :text="args.text" :class="args.customClass" />'
  })
}`,...(r=(o=t.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const p=["AnchorStory"];export{t as AnchorStory,p as __namedExportsOrder,l as default};
