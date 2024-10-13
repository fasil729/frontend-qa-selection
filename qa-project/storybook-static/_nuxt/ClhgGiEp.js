import{_ as r}from"./C5iYK7m3.js";import"./Bp0l9591.js";const l={title:"Atoms/Image",component:r,tags:["autodocs"],argTypes:{src:{control:"text",description:"Source URL of the image"},alt:{control:"text",description:"Alternative text for the image"},customClass:{control:"text",description:"Custom CSS classes for additional styling"}}},t={args:{src:"https://via.placeholder.com/150",alt:"Placeholder Image",customClass:"rounded-lg"},render:o=>({components:{Image:r},setup(){return{args:o}},template:'<Image :src="args.src" :alt="args.alt" :customClass="args.customClass" />'})};var s,e,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    src: 'https://via.placeholder.com/150',
    // Default image URL
    alt: 'Placeholder Image',
    // Default alt text
    customClass: 'rounded-lg' // Example custom class for styling
  },
  render: args => ({
    components: {
      Image
    },
    setup() {
      return {
        args
      };
    },
    template: '<Image :src="args.src" :alt="args.alt" :customClass="args.customClass" />'
  })
}`,...(a=(e=t.parameters)==null?void 0:e.docs)==null?void 0:a.source}}};const m=["ImageStory"];export{t as ImageStory,m as __namedExportsOrder,l as default};
