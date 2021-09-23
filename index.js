console.log ("hello")
const about = document.querySelector('#about')
console.log(about)
about.addEventListener('click', (event) => {
  event.preventDefault
  about.innerText = "about"
  about.classList.add('white')
})
const media = document.querySelector('#media')
console.log(media)
media.addEventListener('click', (event) => {
  event.preventDefault
  media.innerText = "media"
  media.classList.add('white')
})

const info = document.querySelector('#info')
console.log(info)
info.addEventListener('click', (event) => {
  event.preventDefault
  info.innerText = "info"
  info.classList.add('white')

})
const navbar = () => {
  const about = document.querySelector('#about')
  const hiddenabout = document.querySelector('.hiddenabout')

  const media = document.querySelector('#media')
  const hiddenmedia = document.querySelector('.hiddenmedia')

  const info = document.querySelector('#info')
  const hiddeninfo = document.querySelector('.hiddeninfo')

  about.addEventListener('click', () => {
    hiddenabout.classList.remove('hidden')
    hiddenmedia.classList.add('hidden')
    hiddeninfo.classList.add('hidden')
    console.log("stringtest")
  })
  media.addEventListener('click', () => {
    hiddenmedia.classList.remove('hidden')
    hiddenabout.classList.add('hidden')
    hiddeninfo.classList.add('hidden')
  })
  info.addEventListener('click', () => {
    hiddeninfo.classList.remove('hidden')
    hiddenmedia.classList.add('hidden')
    hiddenabout.classList.add('hidden')
  })
}
navbar()
