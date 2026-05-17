class MusicTheme {
    constructor(parameters) {
        // list of MusicTracks
        this.scores = [];
        // Bounding line, list of vector points (x,y)
        this.bounds = [];
        // title text
        this.title;
        // music tracks associated with
        this.tracks = [];
    }

    draw() {
        // Draw circle
        // arrows
        // text

    }
}

class MusicScore {
    constructor(parameters) {
        // Centre points
        this.cx;
        this.cy;
        // image or svg
        this.img;
    }
    // return true or false if mouse is hovering
    isMouseHover() {
        return false;
    }
    draw() {

    }
}

class MusicTrack {
    constructor(parameters) {
        // circle Centre points and raidus
        this.cx;
        this.cy;
        this.r;
        // Arrows pointing to themes
        this.arrows;
        // text label in centre of circle
        this.label;
        // audio tracks associated, same order as arrows.
        this.audio = [];
    }

    // return index of arrow or -1 if none or Infinity if all
    isMouseHover(mouseX, mouseY) {

        let arrowIndex = -1;
        for (let i = 0; i < this.arrows.length; i++) {

            if (this.arrows[i].isMouseHover()) {
                hoveredIndex = i;
                break;
            }
        }
        if (arrowIndex === -1) {
            const dx = mouseX - this.cx;
            const dy = mouseY - this.cy;
            const radius = 40;
            if ((dx * dx + dy * dy) <= radius * radius)
                arrowIndex = Infinity;
        }
        return arrowIndex;
    }

    draw() {
        // Draw circle
        // arrows
        // text

    }

    play() {
        // restart if already ended
        if (this.audio.ended) {
            this.audio.currentTime = 0;
        }

        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    stop() {
        this.audio.pause();
        this.audio.currentTime = 0;
    }
}


class Arrow {
    constructor(parameters) {
        // Start End points
        this.sx;
        this.sy;
        this.ex;
        this.ey;
    }
    draw() {
        //Draw line / rectangle
        // rotate and draw triangle
    }
}