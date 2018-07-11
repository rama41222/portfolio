const state = () => ({
  socialLinks: [
    { label:"Facebook",route:'https://www.facebook.com/rama41222', class:'fab fa-facebook-f facebook', target:'_blank', rel: 'noopener'},
    { label:"Medium",route:'https://medium.com/@rama41222', class:'fab fa-medium-m medium', target:'_blank', rel: 'noopener'},
    { label:"Blogspot",route:'https://rama41222.blogspot.com/', class:'fab fa-blogger-b blogger', target:'_blank', rel: 'noopener'},
    { label:"LinkedIn",route:'https://www.linkedin.com/in/dinushanka', class:'fab fa-linkedin-in linkedin', target:'_blank', rel: 'noopener'},
    { label:"github",route:'https://github.com/rama41222', class:'fab fa-github git', target:'_blank', rel: 'noopener'},
    { label:"Mail Me",route:'mailto:dinushankanrg@gmail.com?Subject=Hello%20Rama', class:'far fa-envelope-open' +
    ' mail', target:'_blank', rel: 'noopener'},
    { label:"Twitter",route:'https://twitter.com/dnrg41222', class:'fab fa-twitter twitter', target:'_blank', rel: 'noopener'},
    { label:"Instagram",route:'https://www.instagram.com/rama41222', class:'fab fa-instagram ig', target:'_blank', rel: 'noopener'},
  ],
  generalInfo: {
    title: 'HELLO',
    name: 'I\'M Dinushanka',
    nick: '@rama41222',
    who: 'a FullStack Engineer'
  },
  projects: [
    {id: 2, name: '', description: '', url: '', alt:'Dialog Megarun', image: '/projects/megarun.jpg', class: 'img-project'},
    {id: 1, name: '', description: '', url: '', alt:'IMI Portal', image: '/projects/imi.png', class: 'img-project'},
    {id: 3, name: '', description: '', url: '', alt:'BakBak Game', image: '/projects/bakbak.jpg', class: 'img-project'},
    {id: 4, name: '', description: '', url: '', alt:'Hunt Game', image: '/projects/hunt.jpg', class: 'img-project'},
    {id: 5, name: '', description: '', url: '', alt:'Blanzed Game', image: '/projects/blanzed.jpg', class: 'img-project'},
    {id: 6, name: '', description: '', url: '', alt:'Urban Agent Mobile App', image: '/projects/ua.jpg', class: 'img-project'},
    {id: 7, name: '', description: '', url: '', alt:'Pearson Writer', image: '/projects/writer.jpg', class: 'img-project'},
    {id: 8, name: '', description: '', url: '', alt:'Viyana', image: '/projects/viyana.jpg', class: 'img-project'},
    {id: 9, name: '', description: '', url: '', alt:'SLIIT HIS', image: '/projects/his.png', class: 'img-project'},
    {id: 10, name: '', description: '', url: '', alt:'Mediashare', image: '/projects/media.png', class: 'img-project'},
    {id: 11, name: '', description: '', url: '', alt:'MVIVO', image: '/projects/mvivo.jpeg', class: 'img-project'},
    {id: 11, name: '', description: '', url: '', alt:'Cloud File Sharing Component', image: '/projects/driveplug.png', class: 'img-project'},
    {id: 11, name: '', description: '', url: '', alt:'Rider Rush', image: '/projects/riderrush.jpg', class: 'img-project'},
    {id: 11, name: '', description: '', url: '', alt:'Singlish', image: '/projects/singlish.png', class: 'img-project'},
  ],
  isOnline: true
  
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
  },
  getOnline: state => {
    return state.isOnline
  }
}

const mutations = {
  setOnline: function (state, status) {
    state.isOnline = status
  }
}

const actions = {
  async checkIfOnline({commit}, payload) {
    commit('setOnline', payload.isOnline);
  },
}

export default {
  state,
  actions,
  mutations,
  getters
  
}
