function Gras() {
    this.x = 0;
    this.y = 0;

    this.draw = function() {
        ctx.fillStyle = "#5eff00";

        ctx.fillRect(this.x, this.y, scale, scale);
    }
}