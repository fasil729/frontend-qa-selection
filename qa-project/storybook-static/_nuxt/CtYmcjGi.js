import{_ as a}from"./DZUpnYNi.js";import"./Bp0l9591.js";const d={title:"Atoms/Header",component:a,tags:["autodocs"],argTypes:{text:{control:"text",description:"Header text content"},customClass:{control:"text",description:"Custom CSS classes for styling the header"}}},t={args:{text:"Header",customClass:"text-6xl font-bold opacity-90"},render:o=>({components:{Header:a},setup(){return{args:o}},template:'<Header :text="args.text" :customClass="args.customClass" />'})};var e,s,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    text: 'Header',
    customClass: 'text-6xl font-bold opacity-90'
  },
  render: args => ({
    components: {
      Header
    },
    setup() {
      return {
        args
      };
    },
    template: '<Header :text="args.text" :customClass="args.customClass" />'
  })
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const m=["HeaderStory"];export{t as HeaderStory,m as __namedExportsOrder,d as default};
