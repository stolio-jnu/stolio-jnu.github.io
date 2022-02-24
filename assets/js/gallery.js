galleryItems = {
  haksa: {
    title: '전남대학교 학사공지',
    date: 'Jan 2022',
    imgPath: './assets/img/works/rssnoti.png',
    listSelectorID: 'works__haksa',
    links: [
      {
        name: 'Discord',
        href: 'https://s.ho9.me/jnu-noti'
      },
      {
        name: 'Github',
        href: 'https://github.com/ShapeLayer/rss-check-discord-bot__jnu'
      }
    ]
  },
  algo22: {
    title: '2022 알고리즘 스터디',
    date: 'Mar 2022 ~',
    imgPath: './assets/img/works/algo22.png',
    listSelectorID: 'works__algo22',
    links: [
      {
        name: 'Page',
        href: '##NONE##'
      }
    ]
  }
}

function changeSelected (toID) {
  document.querySelector('ul#works__list-e li.selected').className = ''
  document.getElementById(galleryItems[toID]['listSelectorID']).className = 'selected'
  document.getElementById('works__info-title').innerText = galleryItems[toID]['title']
  document.getElementById('works__info-date').innerText = galleryItems[toID]['date']
  document.getElementById('works__hero-img').src = galleryItems[toID]['imgPath']
  linkTags = ''
  galleryItems[toID]['links'].forEach(element => {
    linkTags += '<li><a ' + (element['href'] !== '##NONE##' ?  'href="' + element['href'] : '') + '" ' + (element['href'] !== '##NONE##' ? 'target="_blank"' : '') + '>' + element['name'] + '</a></li>'
  });
  document.getElementById('works__info-links-e').innerHTML = linkTags
}

changeSelected('haksa')