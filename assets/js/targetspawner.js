AFRAME.registerComponent('target-spawner', {
  schema: {
    mixin: {default: '' }
  },

  update: function (oldData) {
    this.el.addEventListener(this.data.on, this.spawn.bind(this));
  },


  spawn: function () {

    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    var rotation = el.getAttribute('rotation');
    var entityRotation;

    console.log(position);
    console.log(rotation);

    position.setFromMatrixPosition(matrixWorld);
    var entity = document.createElement('a-entity');

    entity.setAttribute('position', position);
    entity.setAttribute('mixin', this.data.mixin);
    entity.addEventListener('loaded', function () {
      entityRotation = entity.getComputedAttribute('rotation');
      entity.setAttribute('rotation', {
        x: entityRotation.x + rotation.x,
        y: entityRotation.y + rotation.y,
        z: entityRotation.z + rotation.z
      });
    });

    el.sceneEl.appendChild(entity);

    setTimeout(function (){
      window.canFire = true;
    }, 1000);

    setTimeout(function (){
      el.sceneEl.removeChild(entity);
    }, 10000);
  }
  
});