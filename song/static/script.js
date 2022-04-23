const songs = ['song']

songs.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.addEventListener('click', () => {
        stopSong()
        document.getElementById(sound).play()
    })
    document.getElementById('button').appendChild(btn)
})

function stopSong() {
    songs.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}
