(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});


  var Game = Hanoi.Game = function (num_disks) {
    NUM_DISKS = num_disks;
    this.towers = this.setupTowers();
    this.num_moves = 0;
  };

  Game.prototype.isWon = function () {
     return (this.towers[1].length == NUM_DISKS || this.towers[2].length == NUM_DISKS);
  };

  Game.prototype.setupTowers = function () {
      var towers = [[], [], []];
      for (var i = NUM_DISKS; i > 0; i--) {
          towers[0].push(i)
      }
      return towers;
  }
  
  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      this.num_moves ++;
      return true;
    } else {
      return false;
    }
  };
  
})(this);
