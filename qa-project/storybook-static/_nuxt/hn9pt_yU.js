import{_ as u}from"./D29XQ_vQ.js";import"./Bp0l9591.js";import"./DOpzD10v.js";import"./Big1ZEaW.js";import"./B5-gTChS.js";import"./QQHtzclr.js";import"./CP3Eyfab.js";import"./C5iYK7m3.js";import"./D6iWbNBx.js";import"./CcFRfgKE.js";import"./CtXiy-54.js";import"./AlswhQCl.js";import"./DlAUqK2U.js";const P={title:"Organisms/EmailLogIn",component:u,tags:["autodocs"],argTypes:{title:{control:{type:"text"},description:"The title displayed in the InfoBanner",defaultValue:"Welcome to Aladial"},contentText:{control:{type:"text"},description:"The content text displayed in the InfoBanner",defaultValue:"Create or access your account from here"},emailPlaceholder:{control:{type:"text"},description:"Placeholder for the email input",defaultValue:"Email Address"},buttonText:{control:{type:"text"},description:"Text for the action button",defaultValue:"Enter"},isLoading:{control:{type:"boolean"},description:"Indicates if the action button is loading",defaultValue:!1},hasError:{control:{type:"boolean"},description:"Indicates if there was an error during login",defaultValue:!1}}},o=g=>({components:{EmailLogIn:u},setup(){return{args:g}},template:'<EmailLogIn v-bind="args" />'}),e=o.bind({});e.args={title:"Welcome to Aladial",contentText:"Create or access your account from here",emailPlaceholder:"Email Address",buttonText:"Enter",isLoading:!1,hasError:!1};const t=o.bind({});t.args={title:"Welcome to Aladial",contentText:"Creating your account...",emailPlaceholder:"Email Address",buttonText:"Loading...",isLoading:!0,hasError:!1};const r=o.bind({});r.args={title:"Welcome to Aladial",contentText:"There was an error processing your request.",emailPlaceholder:"Email Address",buttonText:"Try Again",isLoading:!1,hasError:!0};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    EmailLogIn
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailLogIn v-bind="args" />'
})`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    EmailLogIn
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailLogIn v-bind="args" />'
})`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    EmailLogIn
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailLogIn v-bind="args" />'
})`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const v=["Default","LoadingState","ErrorState"];export{e as Default,r as ErrorState,t as LoadingState,v as __namedExportsOrder,P as default};
