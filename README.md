### Bashdio
Terminal styled audio player on static website.

#### How to run?
* Just visit: `https://szelwiga.github.io/Bashdio`
* Or download repo and run it as local version.

#### How it's working?
Drag and drop directory with music clips in format that html `audio` element accepts - `.m4a`, `.mp3`, `.mp4`, `.wav`, `.webm` are fine. The files are not going to be uploaded anywhere, after such drag and drop they will be just visible to website. Using commands decide which clips to play.

#### How to use?
After drag and drop, some basic commands might be useful:
* To load music clips to queue type `push <dirname>`, where the `<dirname>` is path in uploaded directory this command will load to queue `/dirname/*`.
* To start playing audio type `start`.
* Use `volume xx` to set volume.
* Use `play`/`pause` to pause and play audio.

#### Cookies
This website uses cookies to save volume, songs marked as favourite, and current queue.

#### Commands list:
* `reFill` - pushes to queue the queue snapshot saved in cookies queue. Queue saves to cookies in each change. 
* `makeFav <name>` - marks current clip as favourite, if `<name>` argument is used this command search for best matching name across all loaded clips and marks one as favourite.
* `remFav <name>` - unmarks current clip as favourite, if `<name>` argument is used this command search for best matching name across all loaded clips and unmarks one as favourite.. 
* `writeFav` - lists all clips marked as favourite.
* `push Fav` - pushes all clips marked as favourite to queue.
* `cd <dirname>` - enters `<dirname>` (use `..` to go to the parent).
* `sweep` - clears queue.
* `uploadMain` - opens window which allows selecting main folder (similar to drag and drop).
* `load` - opens window which allows loading clips directly into the queue.
* `exit` - exits app. Most browsers forbids closing self so it might not work properly. 
* `queue <len>` - print first `<len>` clips from queue. Default argument is 5. 
* `push <dirname>` - pushes clips matching with `dirname/*` to queue, default argument is `.`, special arguments are `Fav` and `all`.
* `ls` - list subdirectories (not clips!).
* `list <name>` - print's best match to `<name>` and good matches across all clips.  
* `findList <name>` - pushes to queue all clips that matches good to `<name>`.
* `find <name>` - pushes to queue best matching clip.
* `findInQueue` - moves to the front of the queue best matching clip from queue.
* `volume <percentage>` - sets volume to 0%.
* `mute` - mutes.
* `f`, `ff`, `fff`, `ffff` - forward current clip for 5s, 15s, 60s, 180s.
* `g`, `gg`, `ggg`, `ggg` - go backward current clip for 5s, 15s, 60s, 180s.
* `skip` - skips current clip, and loads next from queue.
* `pause`, `stop` - pauses audio.
* `play` - unpauses audio.
* `shuffle` - shuffle the queue.
* `break` - pauses after clip finishes.

#### Note
I wrote the code without knowledge of how parser works. Now i have this knowledge and this code would look totally different.
