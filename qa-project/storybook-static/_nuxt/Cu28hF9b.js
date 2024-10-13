import{_ as o}from"./D6iWbNBx.js";import"./Bp0l9591.js";const c={title:"Atoms/Text",component:o,tags:["autodocs"],argTypes:{customClass:{control:{type:"text"},description:"Custom CSS classes for additional styling"},text:{control:{type:"text"},description:"Text content to display"},ContentText:{control:{type:"text"},description:"Additional text content"}}},t={args:{text:"Hello, World!",ContentText:"This is a sample text.",customClass:"text-xl"},render:r=>({components:{Text:o},setup(){return{args:r}},template:'<Text v-bind="args" />'})};var e,n,s;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    text: 'Hello, World!',
    // Default text
    ContentText: 'This is a sample text.',
    // Default content text
    customClass: 'text-xl' // Default custom class
  },
  render: args => ({
    components: {
      Text
    },
    setup() {
      return {
        args
      };
    },
    template: '<Text v-bind="args" />'
  })
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const x=["TextStory"];export{t as TextStory,x as __namedExportsOrder,c as default};
