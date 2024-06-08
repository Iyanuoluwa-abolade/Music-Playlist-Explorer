
// JavaScript for Opening and Closing the Modal
// step 1: grab our box div
// step 2: add event listeners to the box div
// step 3: event listener opens modal

// step 4: specify which playlist we clicked exactly
// research how to find exactly what was clicked

// step 5: populate playlist data for that specific playlist
// once we know which playlist was clicked, grab data from json

document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    // TODO: fix event listener to attach to each heart button instead of the whole box
    likeButtons.forEach(likeButton => {
        const playlistCard = likeButton.closest('.playlist-cards');
        const likeCounter = playlistCard.querySelector('.like-counter');


        let likeCount = 0;  // Initialize like count

        likeButton.addEventListener('click', () => {
            // All the below logic is fine, but we just need to move it to
            // add event listener to all like buttons, not just the first one
            console.log('**clicked heart');
            likeCount++;
            // instaead of toggling use if
            // likeButton.classList.toggle('liked');
            if (likeButton.classList.contains('liked')) {
                likeButton.classList.remove('liked');
                // likeButton.querySelector('.like-icon').innerHTML = '&#10084;'; // Unicode for filled heart
            } else {
                likeButton.classList.add('liked');
                // likeButton.classList('liked');
                likeButton.querySelector('.like-icon').innerHTML = '&#9825;'; // Unicode for empty heart
            }
            likeCounter.textContent = ` :Likes${likeCount}`;
            // playlistCount++
            // playlistCounter.textContent = `Playlist Count: ${playlistCount}`;
        });
    });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const box= document.querySelectorAll('.box');

//     // TODO: fix event listener to attach to each heart button instead of the whole box
//     const likeButtons = document.querySelectorAll('.like-button'); // gives an array of all the like buttons
//     likeButtons.forEach(likeButton => {
//         likeButton.addEventListener('click', () => {
//             console.log('**clicked heart');
//             // add the event listener to each like button
//         })
//     });


//     box.forEach(box => {
//         const likeButton = box.querySelector('.like-button');
//         const likeCounter = box.querySelector('.like-counter');

//         let likeCount = 0;  // Initialize like count

//         likeButton.addEventListener('click', () => {
//             // All the below logic is fine, but we just need to move it to
//             // add event listener to all like buttons, not just the first one
//             console.log('**clicked heart');
//             likeCount++;
//             likeButton.classList.toggle('liked');
//             if (likeButton.classList.contains('liked')) {
//                 likeButton.querySelector('.like-icon').innerHTML = '&#10084;'; // Unicode for filled heart
//             } else {
//                 likeButton.querySelector('.like-icon').innerHTML = '&#9825;'; // Unicode for empty heart
//             }
//             likeCounter.textContent = likeCount;
//         });
//     });
// });

// - Modal overlay
function populateModal() {

}
    let boxDiv = document.getElementsByClassName("box")[0];
    boxDiv.addEventListener("click", (event) => openModal(event));
    var modal = document.getElementById("playlistModal");
    var span = document.getElementsByClassName("close")[0];

    function openModal(event) {
        console.log("opened moodal");
        const selectedPlaylist = event.target.parentNode.id

        document.getElementById('playlistName').innerText =  `${data.playlists[selectedPlaylist-1].playlist_name}`;
        document.getElementById('playlistImage').src = `${data.playlists[selectedPlaylist-1].playlist_art}`;
        document.getElementById('playlistCreator').innerText = `${data.playlists[selectedPlaylist-1].playlist_creator}`;
        console.log(data.playlists[selectedPlaylist-1].playlist_name);
//    document.getElementById('playlistLocation').innerText = `Location: ${festival.location}`;
//    document.getElementById('artistLineup').innerHTML = `<strong>Lineup:</strong> ${festival.lineup.join(', ')}`;
       modal.style.display = "block";
        let songElement = document.getElementsByClassName('song-container')[0];
        console.log(songElement);
        songElement.innerHTML = ``;

        for (let i = 0; i < playlistsArray.length; i++) {
            // console.log(data.playlists[selectedPlaylist-1].songs);

            console.log("Playlists Array", playlistsArray);
            // let playlistSongs = data.playlists[selectedPlaylist-1].songs;

            let playlistSongs = data.playlists[selectedPlaylist-1].songs;
            console.log("** playlistSongs", playlistSongs);
            const songCard = document.createElement("div");
            songCard.className = "song";
            // loop through playlistSongs
            // for each song, create a card

            for (let j = 0; j < playlistSongs.length; j++) {
                // modalsongs += the html of the song card
                //console.log("** playlistSongs", ${playlistSongs[i].title});
                songCard.innerHTML =`
             <div class ="song">
                <div id = "songImage">
                    <img src = ${playlistSongs[i].cover_art} alt="song cover" class= "song cover" width="70" height="70">
                </div>
                <div class="modal-text">
                    <p class="song-title" >${playlistSongs[i].title}</p>
                    <p class="song-artist">${playlistSongs[i].artist}</p>
                    <p class="song-album">${playlistSongs[i].album}</p>
                </div>
                    <p class="song-duration">${playlistSongs[i].duration}</p>
                </div>
                `;
            }
            songElement.appendChild(songCard);
        }
    }
    modal.style.display = "block";

span.onclick = function() {
   modal.style.display = "none";
}
console.log(data.playlists);
var playlistElements = document.getElementsByClassName("playlist-cards");
    for (let index = 0; index < playlistElements.length; index ++) {
        playlistElements[index].addEventListener('click',  function (event) {

          console.log(`you clicked on ${playlistsArray[index].playlist_name}`);
          document.getElementById("modal-song-title").innerText = playlistElements[index].playlist_name;
            openModal(event);
        });
    }
    // console.log(playlistsArray);
    console.log(playlistElements);


let playlistsArray = data.playlists;


// window.onclick = function(event) {
//    if (event.target == modal) {
//       modal.style.display = "none";
//    }
// }
