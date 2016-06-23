AFRAME.registerComponent('hit-listener', {
	schema: {
		pointValue: {default: 1}
	},

  init: function () {
  	var self = this;
    var el = this.el;
    window.addEventListener('hit', function (event) {
    	if(window.canHit){
    		window.canHit = false;
    		setTimeout(function (){
	    		window.pointHolder = window.pointHolder + parseInt(event.detail[1].pointValue);
	    		window.canHit = true;
          console.log("points: "+window.pointHolder);
	    	}, 1000);
    	}
    });
  }
});