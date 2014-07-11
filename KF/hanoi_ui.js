(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});


  var UI = Hanoi.UI = function (game, num_disks) {
    this.$game = game;
    NUM_DISKS = num_disks;
    this.setupBoard();
    this.render();
    this.setupHandlers();
  };

  UI.prototype.setupBoard = function() {
      //setup initial html towers based on num_disks
    for (var i = 0; i < NUM_DISKS; i++) {
        $( ".towername" ).prepend('<div class="disk" ></div>');
    }
  };
  
    UI.prototype.setupHandlers = function() {
        var that = this;
        
        //set up click handler for pick_up tower (first click)
         $('.tower').on("click", function(event) { // from tower click
             $('.tower').off("click");
             var start_pos = $(event.currentTarget).data('id');
             console.log("in from tower click")
             
             //set up click handler for put-down tower (second click)
             $('.tower').on("click", function(event) { 
                 $('.tower').off("click");
                 var end_pos = $(event.currentTarget).data('id');
                
                 //update game if move was made
                if (that.$game.move(start_pos, end_pos)) {
                    that.render();
                 } 
                 //alert winner and end game if won. Else, reset event handlers
                 if (that.$game.isWon()) {
                     $('.victory').append('<h1 class=victory_text>Congratulations! You won! You finished in ' + 
                     that.$game.num_moves + ' turns!<h1>');
                     $('.victory').append('<img src="http://weknowgifs.com/wp-content/uploads/2013/06/spelling-bee-winner-gif.gif")>');
                 } else {
                     that.setupHandlers();
                 } 
                 
             });
         });    
    };

    UI.prototype.render = function(){
        var ui = this;
        $( ".tower" ).each(function(index, el ) {
         $(el).find('.disk').each(function(index2, el2 ) {
             //If array index contains no disk, display empty string to avoid css misalignment      
             if (ui.$game.towers[index][NUM_DISKS - 1 - index2] === undefined) {
                 $(el2).html('');   
             // else display disk
             } else {
                 $(el2).html(ui.$game.towers[index][NUM_DISKS - 1 - index2]);
             }
         });
        });
  };

    
})(this);
