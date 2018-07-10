const state = () => ({
  socialLinks: [
    { route:'https://www.facebook.com/rama41222', class:'fab fa-facebook-f facebook', target:'_blank', rel: 'noopener'},
    { route:'https://medium.com/@rama41222', class:'fab fa-medium-m medium', target:'_blank', rel: 'noopener'},
    { route:'https://rama41222.blogspot.com/', class:'fab fa-blogger-b blogger', target:'_blank', rel: 'noopener'},
    { route:'https://www.linkedin.com/in/dinushanka', class:'fab fa-linkedin-in linkedin', target:'_blank', rel: 'noopener'},
    { route:'https://github.com/rama41222', class:'fab fa-github git', target:'_blank', rel: 'noopener'},
    { route:'mailto:dinushankanrg@gmail.com?Subject=Hello%20Rama', class:'far fa-envelope-open mail', target:'_blank', rel: 'noopener'},
    { route:'https://twitter.com/dnrg41222', class:'fab fa-twitter twitter', target:'_blank', rel: 'noopener'},
    { route:'https://www.instagram.com/rama41222', class:'fab fa-instagram ig', target:'_blank', rel: 'noopener'},
  ],
  generalInfo: {
    title:'HELLO',
    name:'I\'M Dinushanka',
    nick:'@rama41222',
    who:'a FullStack Engineer'
  },
  projects: [
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''},
    { name:'', description: '', url:'', image:''}
  ]
  
})

const getters = {
  getSocialLinks: state => {
    return state.socialLinks
  },
  getGeneralInfo: state => {
    return state.generalInfo
  },
  getProjects: state => {
    return state.projects
  }
}

const mutations = {
}

const actions = {}

export default {
  state,
  actions,
  mutations,
  getters
  
}
