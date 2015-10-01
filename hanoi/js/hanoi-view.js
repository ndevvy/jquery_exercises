(function () {
  if (typeof Hanoi === "undefined") {
    window.Hanoi = {};
  }

  var View = Hanoi.View = function (game, $el) {
    this.$el = $el;
    this.game = game;
    this.setupTowers();
    this.render();
    this.clickTower();
    this.selectTower = -1;
  };

  View.prototype.bindEvents = function() {

  };

  View.prototype.setupTowers = function() {
    // for (var i = 0; i < 3; i++) {
    //   var $tower = $("<ul class='hanoi-tower'></ul>");
    //   $tower.attr("id", i);
    //   this.$el.append($tower);
    // }

    this.render();
  };

  View.prototype.render = function() {
    // var selector = "#" + towerIdx;
    // $(selector);
    // $tower.eq(discIdx)

    this.$el.empty();
    var that = this;
    //var $hanoi = ('');

    this.game.towers.forEach(function(tower, towerIndex) {
      var $tower = $("<ul class='hanoi-tower'></ul>");
      $tower.attr("tower-id", towerIndex);

      tower.forEach(function(disc, discIndex) {
        var $disc = $("<li class='hanoi-disc'></li>");
        $disc.attr("disc-id", discIndex);
        $tower.append($disc);
      });

      that.$el.append($tower);
    });

  };

  View.prototype.clickTower = function() {
    var that = this;
    var selector;
    var $selectTower;

    $("div.hanoi-grid").on("click", "ul", function(event) {

      if (that.selectTower === -1) {
        that.selectTower = $(event.currentTarget).attr("tower-id");
        // console.log(event.currentTarget);
        //console.log(that.selectTower);

        selector = "tower-id#" + that.selectTower;
        $selectTower = $(selector);
        $selectTower.attr("selected", "true");
        that.render();
      }
      else {
        var toTower = $(event.currentTarget).attr("tower-id");
        //console.log(that.selectTower);
        // console.log(toTower);
        that.game.move(that.selectTower, toTower);
        /// error handling



        selector = "tower-id#" + that.selectTower;
        $selectTower = $(selector);
        $selectTower.attr("selected", "false");
        that.selectTower = -1;
        that.render();
      }
    });
  };

  // View.prototype.selectTowerToggle = function() {
  //   var selector = "tower-id#" + this.selectTower;
  //
  // };

})();
