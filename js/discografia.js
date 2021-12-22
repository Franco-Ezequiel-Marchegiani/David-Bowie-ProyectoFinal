const discos = [{
    id: 1,
    title: "David Bowie - 1967",
    informacion: "Discográfica: Deram | Formato: LP",
    img: "../imagenes/portada/1_davidBowie.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/0FjFEuKt6CoUiY73DMdK5N"
},
{
    id: 2,
    title: "Space Oddity - 1969",
    informacion: "Discográfica: Philips, Mercury | Formato: LP",
    img: "../imagenes/portada/2_spaceOdity.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/1ay9Z4R5ZYI2TY7WiDhNYQ"
},
{
    id: 3,
    title: "The Man Who Sold the World - 1970",
    informacion: "Discográfica: Mercury | Formato: LP",
    img: "../imagenes/portada/3_theManHowSoldTheWorld.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/4h9rWFWhgCSSrvIEQ0YhYG"
},
{
    id: 4,
    title: "Hunky Dory - 1971",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/4_hunkyDory.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/6fQElzBNTiEMGdIeY0hy5l"
},
{
    id: 5,
    title: "The Rise and Fall of Ziggy Stardust - 1972",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/5_theRiseAndFallOfZiggyStardust.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56"
},
{
    id: 6,
    title: "Aladdín Sane - 1973",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/6_aladdinSane.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/3HZKOk1knxrUU3y5ZIOdbz"
},
{
    id: 7,
    title: "Pin Ups - 1973",
    informacion: "Discográfica: RCA Records | Formato: LP",
    img: "../imagenes/portada/7_pinUps.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/71nxmbr3tHAVyvdHXc0ltd"
},
{
    id: 8,
    title: "Diamond Dogs - 1974",
    informacion: "Discográfica: RCA | Formato: ",
    img: "../imagenes/portada/8_diamondDogs.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/72mfhbEsMtXR6s7v9UhKe3"
},
{
    id: 9,
    title: "Young Americans - 1975",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/9_youngAmericans.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/0lITGovWgaQGi42EfqcE5P"
},
{
    id: 10,
    title: "Station to Station - 1976",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/10_stationToStation.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/0MWrKayUshRuT8maG4ZAOU"
},
{
    id: 11,
    title: "Low - 1977",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/11_low.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/2de6LD7eOW8zrlorbS28na"
},
{
    id: 12,
    title: "Heroes - 1977",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/12_heroes.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/4I5zzKYd2SKDgZ9DRf5LVk"
},
{
    id: 13,
    title: "Lodger - 1979",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/13_lodger.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/0S5nxDIEprOH23QeDoMeFK"
},
{
    id: 14,
    title: "Scary Monsters (& Super Creeps) - 1980",
    informacion: "Discográfica: RCA | Formato: LP",
    img: "../imagenes/portada/14_scaryMonsters.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/5fxvWHvIDPIALfTfRiwyB0"
},
{
    id: 15,
    title: "Let's Dance - 1983",
    informacion: "Discográfica: EMI | Formato: LP",
    img: "../imagenes/portada/15_letsDance.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/4NwG11AsDJluT732lSjMrV"
},
{
    id: 16,
    title: "Tonight - 1984",
    informacion: "Discográfica: EMI | Formato: LP",
    img: "../imagenes/portada/16_tonight.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/3NkelzSfQzROagWVnseU5C"
},
{
    id: 17,
    title: "Never Let Me Down - 1987",
    informacion: "Discográfica: EMI | Formato: LP",
    img: "../imagenes/portada/17_neverLetMeDown.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/3BLIfiiKINZt4MJ1uDK2wa"
},
{
    id: 18,
    title: "Black Tie White Noise - 1993",
    informacion: "Discográfica: Arista, BMG | Formato: CD, 2×CD+DVD, LP",
    img: "../imagenes/portada/18_blackTieWhiteNoise.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/1yFItZkb7DBAkQ5RB8OJv9"
},
{
    id: 19,
    title: "Outside - 1995",
    informacion: "Discográfica: RCA | Formato: LP, CD",
    img: "../imagenes/portada/19_outside.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/0pUursvGUAgcDiEqYlnZ0q"
},
{
    id: 20,
    title: "Earthling - 1997",
    informacion: "Discográfica: RCA | Formato: LP, CD",
    img: "../imagenes/portada/20_earthling.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/4yRoLvuzNxFDdodNNrZAEM"
},
{
    id: 21,
    title: "Hours... - 1999",
    informacion: "Discográfica: Virgin | Formato: CD, 2×CD, D",
    img: "../imagenes/portada/21_hours.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/79EPGP6VA65fDFs4fgFpel"
},
{
    id: 22,
    title: "Heathen - 2002",
    informacion: "Discográfica: ISO/Columbia | Formato: CD, 2×CD, LP, DD",
    img: "../imagenes/portada/22_Heathen.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/6cideQBTEM8b6pQ40OHQ2P"
},
{
    id: 23,
    title: "Reality - 2003",
    informacion: "Discográfica: ISO/Columbia | Formato: CD, 2×CD, LP, DD",
    img: "../imagenes/portada/23_reality.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/04bKxe1Y7WFw4yrDPlmswG"
},
{
    id: 24,
    title: "The Next Day - 2013",
    informacion: "Discográfica: Columbia Records | Formato: CD, LP, DD",
    img: "../imagenes/portada/24_theNextDay.jpg",
    linkAlbumSpotify: "https://open.spotify.com/album/16F7X7WOFZhMwQNsMil7lq"
},
{
    id: 25,
    title: "BlackStar - 2016",
    informacion: "Discográfica: Sony Records | Formato: CD, LP, DD",
    img: "../imagenes/portada/25_blackStar.png",
    linkAlbumSpotify: "https://open.spotify.com/album/2w1YJXWMIco6EBf0CovvVN"
}]

let contenedorDiscos = document.querySelector("#contenedorDiscos");

for (let Disco of discos) {
    let creacionDisco = document.createElement("div");
    creacionDisco.innerHTML = `
    <div class="card">
        <img
          src="${Disco.img}"
          class="card-img-top" alt="Disco David Bowie">
        <div class="card-body">
          <h5 class="card-title">${Disco.title}</h5>
          <p class="card-text">${Disco.informacion}</p>
          <a href="${Disco.linkAlbumSpotify}" target="_blank"
            class="btn btn-primary">Escuchar Disco</a>
        </div>
    </div> 
    `
    contenedorDiscos.appendChild(creacionDisco)
}