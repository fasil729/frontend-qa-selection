import{_ as u}from"./Book95z-.js";import"./Bp0l9591.js";import"./COS_L-Hs.js";import"./BOSF4D8f.js";import"./B5-gTChS.js";import"./D6iWbNBx.js";import"./CP3Eyfab.js";import"./C5iYK7m3.js";import"./0derO6nf.js";const E={title:"Organisms/EmailSignUpHeader",component:u,tags:["autodocs"],argTypes:{bannerTitle:{control:{type:"text"},description:"Title text for the InfoBaner",defaultValue:"Nice to meet you"},bannerContent:{control:{type:"text"},description:"Content text for the InfoBaner",defaultValue:"Upload a profile picture and complete your presentation"},checkboxLabel:{control:{type:"text"},description:"Label text for the CheckboxWithText",defaultValue:"I agree to the terms and conditions"},isChecked:{control:{type:"boolean"},description:"Initial checked state of the checkbox",defaultValue:!1}}},n=g=>({components:{EmailSingUpHeader:u},setup(){return{args:g}},template:'<EmailSingUpHeader v-bind="args" />'}),e=n.bind({});e.args={bannerTitle:"Nice to meet you",bannerContent:"Upload a profile picture and complete your presentation",checkboxLabel:"I agree to the terms and conditions",isChecked:!1};const t=n.bind({});t.args={...e.args,isChecked:!0};const r=n.bind({});r.args={bannerTitle:"Welcome to Your New Journey",bannerContent:"Set up your profile for a better experience",checkboxLabel:"I accept the privacy policy",isChecked:!1};var a,o,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    EmailSingUpHeader
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSingUpHeader v-bind="args" />'
})`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    EmailSingUpHeader
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSingUpHeader v-bind="args" />'
})`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`args => ({
  components: {
    EmailSingUpHeader
  },
  setup() {
    return {
      args
    };
  },
  template: '<EmailSingUpHeader v-bind="args" />'
})`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const H=["Default","CheckedCheckbox","CustomBanner"];export{t as CheckedCheckbox,r as CustomBanner,e as Default,H as __namedExportsOrder,E as default};
