const themeSong = [
    {
        word: 'terem',
        delay: 0
    }, {
        word: 'terem',
        delay: 1000
    }, {
        word: 'terem',
        delay: 2000
    }, {
        word: 'terem',
        delay: 2500
    }, {
        word: 'terem',
        delay: 3000
    }, {
        word: 'terem',
        delay: 3500
    }, {
        word: 'tereeeem',
        delay: 4000
    }, {
        word: 'terererem',
        delay: 5500
    }
]

themeSong.forEach((themeSongItem) => {
    setTimeout(() => {
        console.log(themeSongItem.word)
    }, themeSongItem.delay)
})
