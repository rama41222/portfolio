export default async function ({store}) {
  window.removeEventListener('offline', function ({type}) {
    let status = type === 'online'
    store.commit('setOnline', status)
  })
  window.removeEventListener('online', function ({type}) {
    let status = type === 'online'
    store.commit('setOnline', status)
  })

  console.log('is Online' + window.navigator.onLine)

  if (!window.navigator) {
    store.commit('setOnline', false)
    return
  }
  
  const val = Boolean(window.navigator.onLine)
  store.commit('setOnline', { isOnline: val})
  
  window.addEventListener('offline', function ({ type }) {
    let status = type === 'online'
    store.commit('setOnline',  status)
  })
  window.addEventListener('online', function ({ type}) {
    let status = type === 'online'
    store.commit('setOnline',  status)
  })

}
