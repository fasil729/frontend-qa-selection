import{_ as h}from"./BYMlJE2s.js";import"./Bp0l9591.js";import"./DOpzD10v.js";import"./Big1ZEaW.js";import"./B5-gTChS.js";import"./QQHtzclr.js";import"./AlswhQCl.js";import"./D6iWbNBx.js";import"./DlAUqK2U.js";const L={title:"Organisms/EmailSignUpForm",component:h,tags:["autodocs"],argTypes:{namePlaceholder:{control:{type:"text"},description:"Placeholder for the name input field",defaultValue:"Name"},surnamePlaceholder:{control:{type:"text"},description:"Placeholder for the surname input field",defaultValue:"Surname"},emailPlaceholder:{control:{type:"text"},description:"Placeholder for the email input field",defaultValue:"test@gmail.com"},passwordPlaceholder:{control:{type:"text"},description:"Placeholder for the password input field",defaultValue:"Password"},confirmPasswordPlaceholder:{control:{type:"text"},description:"Placeholder for the confirm password input field",defaultValue:"Confirm password"},buttonText:{control:{type:"text"},description:"Text for the action button",defaultValue:"Enter"},termsText:{control:{type:"text"},description:"Text for the Terms & Conditions",defaultValue:"Terms & Conditions"},isLoading:{control:{type:"boolean"},description:"Loading state for the form",defaultValue:!1},hasError:{control:{type:"boolean"},description:"Displays error state",defaultValue:!1},hasSuccess:{control:{type:"boolean"},description:"Displays success state after form submission",defaultValue:!1}}},o=S=>({components:{EmailSignUPForm:h},setup(){return{args:S}},template:'<EmailSignUPForm v-bind="args" />'}),e=o.bind({});e.args={namePlaceholder:"Name",surnamePlaceholder:"Surname",emailPlaceholder:"test@gmail.com",passwordPlaceholder:"Password",confirmPasswordPlaceholder:"Confirm password",buttonText:"Enter",termsText:"Terms & Conditions",isLoading:!1,hasError:!1,hasSuccess:!1};const r=o.bind({});r.args={...e.args,buttonText:"Loading...",isLoading:!0};const t=o.bind({});t.args={...e.args,hasError:!0};const a=o.bind({});a.args={...e.args,hasSuccess:!0};var s,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    EmailSignUPForm
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSignUPForm v-bind="args" />'
})`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var l,m,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    EmailSignUPForm
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSignUPForm v-bind="args" />'
})`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    EmailSignUPForm
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSignUPForm v-bind="args" />'
})`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,f,P;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    EmailSignUPForm
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSignUPForm v-bind="args" />'
})`,...(P=(f=a.parameters)==null?void 0:f.docs)==null?void 0:P.source}}};const _=["Default","LoadingState","ErrorState","SuccessState"];export{e as Default,t as ErrorState,r as LoadingState,a as SuccessState,_ as __namedExportsOrder,L as default};
