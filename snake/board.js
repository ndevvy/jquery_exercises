(function() {

  if (typeof Snake === "undefined") {
    Snake = window.Snake = {};
  }

  Snake.Board = function() {
    this.snake = new Snake();
    this.grid = this.setupGrid(500);
  };

  Snake.Board.prototype.render = function() {
    var segment;
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid[0].length; j++) {
        for (var k = 0; k < this.snake.segments.length; k++) {
          segment = this.snake.segments[k];
          /// render this position based on whether it's a segment or not;
        }
      }
    }
  };

  Snake.Board.prototype.setupGrid = function(size) {
    var grid = [];
    for (var i = 0; i < size; i++) {
      grid.push([]);
      for (var j = 0; j < size; j++) {
        grid[i].push([]);
      }
    }
    return grid;
  };

})();
