(function () {
  if (typeof Snake === "undefined") {
    Snake = window.Snake = {};
  }

  var Snake = function() {
    this.dir = "N";
    this.segments = [[1,1]];

  };

  Snake.prototype.move = function() {
    /// need to change this to use Coords instead
    var head = this.segments[this.segments.length - 1];
    if (this.dir === "N") {

      this.segments.push([head[0], head[1] + 1]);
    }
    else if (this.dir === "S"){
      this.segments.push([head[0], head[1] - 1]);
    }
    else if (this.dir === "E"){
      this.segments.push([head[0] + 1, head[1]]);
    }
    else {
      this.segments.push([head[0] - 1, head[1]]);
    }
    this.segments.shift();
  };

  Snake.prototype.turn = function(dir) {
    this.dir = dir;
  };

  var Coord = function(pos) {
    this.pos = value;
  };

  Coord.prototype.plus = function(delta) {
    this.pos[0] += delta[0];
    this.pos[1] += delta[1];
  };

  Coord.prototype.equals = function(pos) {
    if (pos[0] === this.pos[0] && pos[1] === this.pos[1]) {
      return true;
    }
    return false;
  };


})();
