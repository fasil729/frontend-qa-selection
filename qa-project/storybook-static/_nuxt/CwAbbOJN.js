import{c,j as u,p as g,o as f}from"./Bp0l9591.js";const l={__name:"JoinUsSection",props:{togglePopup:Function},setup(t){return(a,e)=>{const i=g("ButtonWithIcon");return f(),c("section",{class:"join-us-section",onClick:e[0]||(e[0]=(...r)=>t.togglePopup&&t.togglePopup(...r))},[u(i,{iconClass:"fa-solid fa-user-plus",iconColor:"white",buttonText:"Join Us",textClass:"text-white"})])}}},P={title:"Organisms/JoinUsSection",component:l,tags:["autodocs"],argTypes:{iconClass:{control:{type:"text"},description:"CSS class for the icon",defaultValue:"fa-solid fa-user-plus"},iconColor:{control:{type:"color"},description:"Color of the icon",defaultValue:"#ffffff"},buttonText:{control:{type:"text"},description:"Text displayed on the button",defaultValue:"Join Us"}}},d=t=>({components:{JoinUsSection:l},setup(){return{args:t,togglePopup:()=>{alert("Popup toggled!")}}},template:'<JoinUsSection v-bind="args" :togglePopup="togglePopup" />'}),o=d.bind({});o.args={iconClass:"fa-solid fa-user-plus",iconColor:"#ffffff",buttonText:"Join Us"};var n,s,p;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`args => ({
  components: {
    JoinUsSection
  },
  setup() {
    const togglePopup = () => {
      alert('Popup toggled!'); // Simple alert to simulate popup toggle
    };
    return {
      args,
      togglePopup
    };
  },
  template: '<JoinUsSection v-bind="args" :togglePopup="togglePopup" />'
})`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const x=["Default"];export{o as Default,x as __namedExportsOrder,P as default};
