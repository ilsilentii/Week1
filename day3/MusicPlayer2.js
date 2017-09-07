var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

printPlaylists: function (tracknum) {

  if (tracknum) {
    console.log(this.playlists[tracknum].id + ": " + this.playlists[tracknum].name + " - " + this.playlists[tracknum].tracks.length + " tracks");

  } else {

  for (var out of Object.keys(this.playlists))

    console.log(this.playlists[out].id + ": " + this.playlists[out].name + " - " + this.playlists[out].tracks.length + " tracks");
  }
},

printTracks: function (song) {
  if (song) {
    console.log(this.tracks[song].id + ": " + this.tracks[song].name + " " + this.tracks[song].artist + " (" + this.tracks[song].album + ")");
  } else {

  for (var out of Object.keys(this.tracks))

    console.log(this.tracks[out].id + ": " + this.tracks[out].name + " " + this.tracks[out].artist + " (" + this.tracks[out].album + ")");
}
},

printPlaylist: function (playlistId) {


  printPlaylists(playlistId);

 for (var out of this.playlists[playlistId].tracks)
  printTracks(out);

},

addTrackToPlaylist: function (trackId, playlistId) {
  this.playlists[playlistId].tracks.push(trackId);
},

uid: function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

},

addTrack: function (name, artist, album) {

  var newID = this.uid();


  this.tracks[newID] = {id: newID, name: name, artist: artist, album: album };

},

addPlaylist: function (name) {

  var newID = this.uid();

  this.playlists[newID] = {id: newID, name: name , tracks: [] };

},
printSearchResults: function(query) {

}
}





// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks




// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)




// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)





// adds an existing track to an existing playlist




// generates a unique id
// (use this for addTrack and addPlaylist)




// adds a track to the library




// adds a playlist to the library





// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search


