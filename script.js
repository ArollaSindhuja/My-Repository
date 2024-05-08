var arr=[
    {songname:"Yareya sareya",url:"./songs/Ya-Re-Ya(PagalWorlld.Com).mp3",img:"https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FucGF0aSUyMGJhcHBhfGVufDB8fDB8fHww"},
    {songname:"Panchakshar Stotra",url:"./songs/Shiv Panchakshar Stotra(PagalWorld.com.cm).mp3",img:"https://media.istockphoto.com/id/511674790/photo/shiva-linga-made-up-of-black-stone-mahashivratri.webp?b=1&s=170667a&w=0&k=20&c=BK3oJnxRMlzI_Ei4MZ8_jQl9J8zufDGTc7D6V-uXgig="},
    {songname:"Magicshop",url:"./songs/BTS - Magic Shop [128 kbps].mp3",img:"https://i1.sndcdn.com/artworks-000426926319-3hbsoj-t500x500.jpg"},
    {songname:"Mikrokosmos",url:"./songs/BTS - 소우주 (Mikrokosmos) [129 kbps].mp3",img:"https://i1.sndcdn.com/artworks-000529695243-ly4vix-t500x500.jpg"}
]

var allsongs=document.querySelector("#all-songs")
var poster=document.querySelector("#left")
var play=document.querySelector("#play")
var backward=document.querySelector("#backward")
var forward=document.querySelector("#forward")

var audio= new Audio()

var selectedsong=0

function mainfunction(){
    var clutter=""
    arr.forEach(function(elem,indx){
        clutter += `<div class="song-card" id=${indx}>
        <div id="songname"> <img src=${elem.img} alt="">
        <h1>${elem.songname}</h1></div>
        <h5>3:40</h5>
     </div>`
    })
    audio.src=arr[selectedsong].url
    allsongs.innerHTML=clutter
    poster.style.backgroundImage=`url(${arr[selectedsong].img})`
}
mainfunction()
allsongs.addEventListener("click",function(dets){
    selectedsong=dets.target.id
    play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
    flag=1
    mainfunction()
    audio.play()
})

var flag=0
play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML=`<i class="ri-pause-mini-fill"></i>`
        mainfunction()
        audio.play()
        flag=1
    }else{
        play.innerHTML=`<i class="ri-play-mini-fill"></i>`
        mainfunction()
        audio.pause()
        flag=0
    }

})

forward.addEventListener("click",function(){
    if(selectedsong < arr.length-1){
        selectedsong++
        mainfunction()
        audio.play()
        forward.style.opacity=1
    }
    else{
        forward.style.opacity=0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedsong >0){
        selectedsong--
        mainfunction()
        audio.play()
        backward.style.opacity=1
    }
    else{
        backward.style.opacity=0.4
    }
})