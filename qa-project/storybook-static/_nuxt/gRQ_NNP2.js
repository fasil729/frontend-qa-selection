import{_ as a}from"./CRXXI9ef.js";import"./Bp0l9591.js";import"./D6iWbNBx.js";const p={title:"Molecules/SocialButton",component:a,tags:["autodocs"],argTypes:{iconSrc:{control:"text",description:"Source URL for the social media icon",defaultValue:"https://path-to-icon/icon.png"},altText:{control:"text",description:"Alternative text for the icon",defaultValue:"Social Media Icon"},buttonText:{control:"text",description:"Text displayed on the button",defaultValue:"Sign in with Social Media"}}},c=i=>({components:{SocialButton:a},setup(){return{args:i}},template:'<SocialButton v-bind="args" />'}),t=c.bind({});t.args={iconSrc:"https://path-to-icon/icon.png",altText:"Social Media Icon",buttonText:"Sign in with Social Media"};var o,e,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    SocialButton
  },
  setup() {
    return {
      args
    };
  },
  template: '<SocialButton v-bind="args" />'
})`,...(n=(e=t.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,p as default};
