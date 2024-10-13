import{_ as r}from"./CmV7967I.js";import"./Bp0l9591.js";const i={title:"Atoms/Button",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked",description:"Function triggered on button click"}}},t={args:{onClick:()=>alert("Button clicked!")},render:c=>({components:{Button:r},setup(){return{args:c}},template:'<Button @click="args.onClick">Click Me</Button>'})};var n,o,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    onClick: () => alert('Button clicked!')
  },
  render: args => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    template: '<Button @click="args.onClick">Click Me</Button>'
  })
}`,...(e=(o=t.parameters)==null?void 0:o.docs)==null?void 0:e.source}}};const u=["ButtonStory"];export{t as ButtonStory,u as __namedExportsOrder,i as default};
