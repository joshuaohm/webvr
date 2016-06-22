AFRAME.registerComponent('hit-listener', {
	schema: {
		pointValue: {default: 1}
	},

  init: function () {
  	var self = this;
    var el = this.el;
    window.addEventListener('hit', function (event) {
    	console.log(event.data);
    	if(window.canHit){
    		window.canHit = false;
    		setTimeout(function (){
	    		console.log('points: '+self.data.pointValue);
	    		window.canHit = true;
	    	}, 1000);
    	}
    });
  }
});