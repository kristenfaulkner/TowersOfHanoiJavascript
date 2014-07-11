
(function (root) {
  if (!(typeof(require) === "undefined")) {
    _ = require('./underscore.js');
  }
  
    var TTT = root.TTT = (root.TTT || {});
    
    var UI = TTT.UI = function ($grid, game) {
      this.$grid = $grid;
      this.$game = game;
      
    };
    
    UI.prototype.setupHandlers = function(){
        $('.grid').on('click', 'div', this.make_move.bind(this));
    };

    
    UI.prototype.make_move = function(event) {
        var id = eval(event.target.id);
        console.log(id);
        if (this.$game.turn(id)) {
            $(event.target).html(this.$game.player);
        }
        
    };
    
})(this);