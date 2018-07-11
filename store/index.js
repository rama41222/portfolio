const state = () => ({
  socialLinks: [
    { title:'Facebook',label:"Facebook",route:'https://www.facebook.com/rama41222', class:'fab fa-facebook-f' +
      ' facebook', target:'_blank', rel: 'external'},
    { title:'Medium Blog',label:"Medium",route:'https://medium.com/@rama41222', class:'fab fa-medium-m medium', target:'_blank', rel: 'external'},
    { title:'Blogspot ',label:"Blogspot",route:'https://rama41222.blogspot.com/', class:'fab fa-blogger-b blogger', target:'_blank', rel: 'external'},
    { title:'Linkedin Profile',label:"LinkedIn",route:'https://www.linkedin.com/in/dinushanka', class:'fab' +
      ' fa-linkedin-in linkedin', target:'_blank', rel: 'external'},
    { title:'Github account',label:"github",route:'https://github.com/rama41222', class:'fab fa-github git', target:'_blank', rel: 'external'},
    { title:'Mail me',label:"Mail Me",route:'mailto:dinushankanrg@gmail.com?Subject=Hello%20Rama', class:'far' +
      ' fa-envelope-open mail', target:'_blank', rel: 'noopener'},
    { title:'Twitter',label:"Twitter",route:'https://twitter.com/dnrg41222', class:'fab fa-twitter twitter', target:'_blank', rel: 'external'},
    { title:'Instagram',label:"Instagram",route:'https://www.instagram.com/rama41222', class:'fab fa-instagram ig', target:'_blank', rel: 'external'},
  ],
  generalInfo: {
    title: 'HELLO',
    name: 'I\'M Dinushanka',
    nick: '@rama41222',
    who: 'a FullStack Engineer'
  },
  projects: [
    {tech:'VueJS',contrib:'Contributed towards the development of the Official Web Portal of Maldives President',id: 15, name: 'Web Portal of Maldives President', description: 'presidency.gov.mv website ', url: 'http://presidency.gov.mv', alt:'Presidency Web', image: '/projects/mv.gif', class: 'img-project'},
    {tech:'NodeJS, VueJS',contrib:'Created the phase 2 of megarun RESTAPI. It contains features like Daily' +
      ' challenges.' +
      ' Also Improved' +
      ' the' +
      ' existing dashboard to filter game analytics more conveniently.',id: 2, name: 'Dialog Megarun', description: 'Dialog Mega' +
      ' Run is a Smart phone' +
      ' based' +
      ' adventure game' +
' exclusively' +
      ' for Dialog customers. With Dialog Mega Run, users can WIN FREE DATA along with other amazing gifts while running through iconic locations in Sri Lanka and simultaneously dodging oncoming obstacles.', url: 'https://www.dialog.lk/mega-run', alt:'Dialog Megarun', image: '/projects/megarun.jpg', class: 'img-project'},
    {tech:'NuxtJS',contrib:'Created the frontend of the imi portal using NuxtJS',id: 1, name: 'IMI Portal', description: 'Online' +
      ' Gaming Portal', url: 'http://web.imigames.io', alt:'IMI' +
    ' Portal', image: '/projects/imi.png', class: 'img-project'},
    {tech:'NodeJS', contrib:'Creating the Web Services required for BakBak game',id: 3, name: 'BakBak Game Web' +
      ' Services', description: 'Bak' +
      ' Bak is all about' +
      ' jumping and' +
      ' landing while' +
      ' surviving. In this game there\'s a rhythm. If you want to survive for a long time you need to go with the rhythm. To survive your timing is very important. To make a power jump you need to tap right after you land. When doing a power jump, frog will turn to red color.Finding the right time is bit hard. But if you can find the right timing this game will be very interesting.', url: 'https://play.google.com/store/apps/details?id=com.Arimac.Gemba', alt:'BakBak Game', image: '/projects/bakbak.jpg', class: 'img-project'},
    {tech:'NodeJS',contrib:'Creating the Web Services required for Hunt game',id: 4, name: 'Hunt Game Web Services', description: 'HUNT is new game architecture which is based on' +
      ' two' +
      ' player designed. Dungeon is the game menu of HUNT. Coins, Swords, bullets, guns, shields and enemies are spawn in dungeon. Score will be update by perfect selection of game. Enemies will attack you when they are in your dungeon. Defeating enemies will level up you with respect to enemy value. Game will give you more advantages in different levels because powers are unlocked with your current level.\n', url: 'https://play.google.com/store/apps/details?id=com.arimac.hunt', alt:'Hunt Game', image: '/projects/hunt.jpg', class: 'img-project'},
    {tech:'NodeJS',contrib:'Creating the Web Services required for Blanzed game, including features like multiplayer options',id: 5, name: 'Blanzed' +
      ' Game Web Services', description: 'The game is known as Daam in Sri Lanka. You can' +
    ' play' +
      ' single player and multi player online. You will receive rating points for playing multiplayer games and people who have good ratings appears at the top of the multiplayer leader-board. Single player game would be challenge for you and people who able to compete with the bot and win will get to the top of the single player leader-board.', url: 'https://play.google.com/store/apps/details?id=com.arimac.blanzed', alt:'Blanzed Game', image: '/projects/blanzed.jpg', class: 'img-project'},
    {tech:'Swift 3.0',contrib:'Contributed towards the development of UA iOS app using Swift 3.0',id: 6, name: 'Urban' +
      ' Agent Mobile' +
      ' App', description: 'An iOS' +
      ' application for UA club Australia', url: 'http://www.ua.com.au', alt:'Urban Agent Mobile App', image: '/projects/ua.jpg', class: 'img-project'},
    {tech:'Swift 3.0',contrib:'Created the Writing Review native iOS module',id: 7, name: 'Pearson' +
      ' Writer Review Component', description: 'An iOS application for' +
      ' researchers, I' +
      ' contributed to the automatic writing review feature in the app. The automatic writing review feature' +
      ' (available on the tablet and desktop apps) helps you check your paper for possible spelling, grammar, and style errors, while offering grammar lessons and suggestions for revising and editing.\n', url: 'https://itunes.apple.com/lk/app/pearson-writer/id590366644?mt=8', alt:'Pearson Writer', image: '/projects/writer.jpg', class: 'img-project'},
    {tech:'NodeJS',contrib : 'Architectured the Cloud computing platform and created all necessary backend' +
      ' services',id: 8, name: 'Viyana', description: 'Cloud Computing Platform', url: 'http://viyana.cloud', alt:'Viyana', image: '/projects/viyana.jpg', class: 'img-project'},
    {tech:'AngularJS 1.0',contrib : 'Created an angular 1.0 based module and an API using nodejs to handle' +
      ' transactions',id: 9, name: 'SLIIT HIS Pharmacy Module', description: 'Pharmacy is the science' +
      ' and' +
      ' technique' +
      ' of' +
    ' preparing and dispensing drugs. It is a health profession that links health sciences with chemical sciences and aims to ensure the safe and effective use of pharmaceutical drugs.The scope of pharmacy practice includes more traditional roles such as compounding and dispensing medications, and it also includes more modern services related to health care, including clinical services, reviewing medications for safety and efficacy, and providing drug information. Pharmacists, therefore, are the experts on drug therapy and are the primary health professionals who optimize use of medication for the benefit of the patients.', url: 'http://his.sliit.lk/Pharmacy/', alt:'SLIIT HIS', image: '/projects/his.png', class: 'img-project'},
    {tech:'Swift 2.0',contrib : 'Contributed towards optimizing code and handling events when there is no internet' +
' connection',id: 10, name: 'Mediashare Internet Connectivity' +
      ' Handling', description: 'The' +
      ' MediaShare app is a' +
      ' video' +
    ' upload tool that allows students to upload, record, and comment of their own and their peers video assignments. Instructors can upload and record videos, comment of videos, grade, and more. MediaShare helps promote a sense of community among students and faculty.', url: 'https://itunes.apple.com/us/app/pearson-mediashare/id584862581?mt=8', alt:'Mediashare', image: '/projects/media.png', class: 'img-project'},
    {tech:'NodeJS, NuxtJS', contrib : 'Created the Rest Services and a Dashboard to handle the creation of houses',id: 11, name: 'MVIVO' +
      ' Configurator', description: 'Interactive House Configurator', url: 'https://mvivo.arimac.digital', alt:'MVIVO', image: '/projects/mvivo.jpeg', class: 'img-project'},
    {tech:'Swift 3.0', contrib : 'Created a custom component to replace the native iOS file sharing component',id: 12, name: 'iOS File' +
      ' Sharing Component', description: ' A File Uploading and a sharing component' +
    ' for' +
    ' ios' +
      ' whichh offers more customizability than the native component', url: 'http://viyana.cloud', alt:'Cloud File' +
      ' Sharing Component', image: '/projects/driveplug.png', class: 'img-project'},
    {tech:'NodeJS',contrib:'Creating the Web Services required for Rider Rush game',id: 13, name: 'Rider Rush Game' +
      ' Web Services', description: 'Guide your way through the top Honda bike' +
' racer!' +
      ' Collect as many as time points in your time bank and be the best player among others! Unlock new bikes, new maps!', url: 'https://play.google.com/store/apps/details?id=com.hondasrilanka.riderrush', alt:'Rider Rush', image: '/projects/riderrush.jpg', class: 'img-project'},
    {tech:'NuxtJs',contrib:'Creating a Singlish to Sinhala Transliterator',id: 14, name: 'Singlish', description: 'A Transliterator which convertes Singlish to Sinhala', url: 'http://viyana.cloud', alt:'Singlish', image: '/projects/singlish.png', class: 'img-project'},
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
