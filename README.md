### Bashdio
Terminal styled audio player on static website.

#### How to run?
* Just visit: `https://szelwiga.github.io/Bashdio`
* Or download repo and run it as local version.

#### How it's working?
Drag and drop directory with music clips in format that html `audio` element accepts - `.m4a`, `.mp3`, `.mp4`, `.wav`, `.webm` are fine. The files are not going to be uploaded anywhere, after such drag and drop they will be just visible to website. Using commands decide which clips to play.

#### How to use?
After drag and drom, some basic commands might be usefull:
* To load music clips to queue type `push <dirname>`, where the dirname is path in uploaded directory this command will load to queue `/dirname/*`.
* To start playing audio type `start`.
* Use `volume xx` to set volume.
* Use `play`/`pause` to pause and play audio.

#### Cookies
This website uses cookies to save volume, songs marked favourite, and current queue.

#### Note
I wrote the code without knowledge of how parser works. Now i have this knowledge and this code would look totally different.
