import{_ as r}from"./QQHtzclr.js";import"./Bp0l9591.js";const l={title:"Atoms/InputField",component:r,tags:["autodocs"],argTypes:{maxlength:{control:{type:"number"},description:"Maximum number of characters allowed in the input"},type:{control:{type:"text"},description:"Type of the input field (e.g., text, password)"},autocomplete:{control:{type:"text"},description:"Autocompletion behavior for the input"},placeholder:{control:{type:"text"},description:"Placeholder text for the input field"},customClass:{control:{type:"text"},description:"Custom CSS classes for additional styling"}}},t={args:{maxlength:100,type:"text",autocomplete:"off",placeholder:"Enter your text...",customClass:"border rounded-md p-2"},render:a=>({components:{InputField:r},setup(){return{args:a}},template:'<InputField v-bind="args" />'})};var e,o,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    maxlength: 100,
    // Default max length
    type: 'text',
    // Default type
    autocomplete: 'off',
    // Default autocomplete
    placeholder: 'Enter your text...',
    // Default placeholder
    customClass: 'border rounded-md p-2' // Example custom class for styling
  },
  render: args => ({
    components: {
      InputField
    },
    setup() {
      return {
        args
      };
    },
    template: '<InputField v-bind="args" />'
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const c=["InputFieldStory"];export{t as InputFieldStory,c as __namedExportsOrder,l as default};
