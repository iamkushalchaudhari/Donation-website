module.exports = {
  content: ["./src/**/*.{html,js,jsx}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors:{
      bluegray:' #2B3A55',
      peach:'#CE7777',
      lightpeach:'#E8C4C4',
      elightpeach:'#F2E5E5',
    },
    extend: {
      backgroundImage: {
        'back-ground': "url('https://drive.google.com/uc?export=view&id=1qlnQ60YSqxf9F4IVJOLoqJSpK_tdglg7')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}