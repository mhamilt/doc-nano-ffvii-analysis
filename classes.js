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
        this.audio = [new Arrow({ owner: this })];
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
        // node that owns object
        this.node = parameters.owner;
        // need cx,cy and r from Music track node
    }

    drawArrowHead() {
        // work out x, y, and angle based on start and end vectors
        push(); //start new drawing state
        translate(x, y);
        rotate(angle);
        triangle(0, 6, 12, 0, 0, -6)
        pop()
    }

    draw() {
        // rectMode(CORNERS)
        // translating using owner cx,cy and r
        // this.node
        // push(); //start new drawing state
        // translate(x, y);
        // rotate(angle);
        // triangle(0, 6, 12, 0, 0, -6)
        // pop()
        //Draw line / rectangle
        // rotate and draw triangle
        // drawArrowHead();
    }

    isMouseOverRect(mx, my, rx, ry, rw, rh, angle) {

        // Translate mouse relative to rect center
        let dx = mx - rx;
        let dy = my - ry;

        // Rotate mouse point in opposite direction
        let localX = dx * cos(-angle) - dy * sin(-angle);
        let localY = dx * sin(-angle) + dy * cos(-angle);

        // Standard bounds check
        return (
            localX > -rw / 2 &&
            localX < rw / 2 &&
            localY > -rh / 2 &&
            localY < rh / 2
        )
    }
    isMouseOverArrowHead() {
        return false;
    }
    isMouseHover(mouseX, mouseY) {
    return (this.isMouseOverRect() || this.isMouseOverArrowHead())
    }
}