const state = () => ({
  socialLinks: [
    { title:'Facebook',label:"Facebook",route:'https://www.facebook.com/rama41222', class:'fab fa-facebook-f' +
      ' facebook', target:'_blank', rel: 'external', alt:'Facebook'},
    { title:'Medium Blog',label:"Medium",route:'https://medium.com/@rama41222', class:'fab fa-medium-m medium', target:'_blank', rel: 'external', alt:'Medium'},
    { title:'Blogspot ',label:"Blogspot",route:'https://rama41222.blogspot.com/', class:'fab fa-blogger-b blogger', target:'_blank', rel: 'external', alt:'Blogger'},
    { title:'Linkedin Profile',label:"LinkedIn",route:'https://www.linkedin.com/in/dinushanka', class:'fab' +
      ' fa-linkedin-in linkedin', target:'_blank', rel: 'external', alt:'linkedin'},
    { title:'Github account',label:"github",route:'https://github.com/rama41222', class:'fab fa-github git', target:'_blank', rel: 'external',alt:'Github'},
    { title:'Mail me',label:"Mail Me",route:'mailto:dinushankanrg@gmail.com?Subject=Hello%20Rama', class:'far' +
      ' fa-envelope-open mail', target:'_blank', rel: 'noopener', alt:'Email Me'},
    { title:'Twitter',label:"Twitter",route:'https://twitter.com/dnrg41222', class:'fab fa-twitter twitter', target:'_blank', rel: 'external' ,alt:'Twitter'},
    { title:'Instagram',label:"Instagram",route:'https://www.instagram.com/rama41222', class:'fab fa-instagram ig', target:'_blank', rel: 'external',alt:'Instagram'},
  ],
  generalInfo: {
    title: 'HELLO',
    name: 'I\'M Dinushanka',
    nick: '@rama41222',
    who: 'a FullStack Engineer'
  },
  projects: [
    {tech:'NodeJs, Nuxt JS, Socket IO, Vert.x, Kubernetes, Docker',id: 16, name: 'AdSpark', description: 'Next' +
      ' Generation In AR/VR' +
      ' Advertising' +
      ' platform', url: 'http://adspark.io', alt:'AdSpark', image: '/projects/logo.png', class: 'img-project'},
    {tech:'Swift 3.0',contrib:'Created the Writing Review native iOS module',id: 7, name: 'Pearson' +
      ' Writer Review Component', description: 'An iOS application for' +
      ' researchers, I' +
      ' contributed to the automatic writing review feature in the app. The automatic writing review feature' +
      ' (available on the tablet and desktop apps) helps you check your paper for possible spelling, grammar, and' +
      ' style errors, while offering grammar lessons and suggestions for revising and editing.\n', url: 'https://itunes.apple.com/lk/app/pearson-writer/id590366644?mt=8', alt:'Pearson Writer', image: '/projects/writer.png', class: 'img-project'},
    {tech:'NodeJS',contrib : 'Architectured the Cloud computing platform and created all' +
      ' necessary' +
      ' backend' +
      ' services',id: 8, name: 'Viyana', description: 'Cloud Computing Platform', url: 'http://viyana.cloud', alt:'Viyana', image: '/projects/viyana.png', class: 'img-project'},
    {tech:'Swift 2.0',contrib : 'Contributed towards optimizing code and handling events when there is no internet' +
' connection',id: 10, name: 'Mediashare Internet Connectivity' +
      ' Handling', description: 'The' +
      ' MediaShare app is a' +
      ' video' +
    ' upload tool that allows students to upload, record, and comment of their own and their peers video' +
      ' assignments. Instructors can upload and record videos, comment of videos, grade, and more. MediaShare helps' +
      ' promote a sense of community among students and faculty.', url: 'https://itunes.apple.com/us/app/pearson-mediashare/id584862581?mt=8', alt:'Mediashare', image: '/projects/media.png', class: 'img-project'},
    {tech:'Swift 3.0', contrib : 'Created a custom component to replace the native iOS file sharing component',id: 12, name: 'iOS File' +
      ' Sharing Component', description: ' A File Uploading and a sharing component' +
    ' for' +
    ' ios' +
      ' whichh offers more customizability than the native component', url: '', alt:'Cloud File' +
      ' Sharing Component', image: '/projects/driveplug.png', class: 'img-project'},
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
