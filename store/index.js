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
    { id: 1,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 2,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 3,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 4,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 5,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 6,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 7,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 8,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 9,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 10,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
    { id: 11,name:'', description: '', url:'', image:'https://www.dialog.lk/dialogdocroot/content/images/page-banners/landing-page/mega-run-banner.jpg', class:'img-project'},
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
