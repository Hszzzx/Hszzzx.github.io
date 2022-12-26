const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: false,
    listMaxHeight: 90,
    autoplay: false,
    lrcType: 3
    audio: [
        {
            name: 'Yellow',
            artist: '神山羊、电鸟个灯泡',
            url: 'http://music.163.com/song/media/outer/url?id=1397293557.mp3',
            cover: 'http://p2.music.126.net/9wO_aJTNb7r-VxGWqk17tw==/109951164427476845.jpg',
            lrc: 'lrc/Yellow.lrc',
            theme: '#02182A'
        },
        {
            name: 'LOSER',
            artist: '米津玄師、电鸟个灯泡',
            url: 'http://music.163.com/song/media/outer/url?id=1324466790.mp3',
            cover: 'http://p1.music.126.net/GWrOK7Ovs7cMFQrA0ewIlQ==/109951163659139920.jpg',
            lrc: 'lrc/LOSER.lrc',
            theme: '#938779'
        }
    ]
});