AFRAME.registerComponent('photo-mode', {
    init: function() {
        const debugLine2 = document.getElementById('debug-text-status-2');
        // const container = document.getElementById('photoModeContainer')
        // const image = document.getElementById('photoModeImage')
        // const shutterButton = document.getElementById('shutterButton')
        // const closeButton = document.getElementById('closeButton')
      console.log('modal 1: ' + document.getElementById('modal_1'));
      const container = document.getElementById('modal_1')
      const image = document.getElementById('photoModeImage')
      const shutterButton = document.getElementById('screenshotBtn')
      const closeButton = document.getElementById('closeButton')
      
      console.log('photomode on');
      //debugLine2.innerHTML = 'photo mode on';
        
      // Container starts hidden so it isn't visible when the page is still loading
      // container.style.display = 'inherit'
      // $('#modal_1').modal('show');
  
      closeButton.addEventListener('click', () => {
        container.classList.remove('photo')
        console.log('close modal');
        $('#modal_1').modal('hide');
      })
      
      console.log('shutter button ');
      console.log(shutterButton);

      shutterButton.addEventListener('click', (e) => {
        // Emit a screenshotrequest to the xrweb component
        e.preventDefault();
        this.el.sceneEl.emit('screenshotrequest')
        console.log('click shutter button');
        console.log('open modal');
        $('#modal_1').modal('show');
        //debugLine2.innerHTML += '<br/>screenshotrequest';
  
        // Show the flash while the image is being taken
        container.classList.add('flash')
      })
  
      this.el.sceneEl.addEventListener('screenshotready', e => {
        // Hide the flash
        container.classList.remove('flash')
        console.log('screenshot is ready');
        // debugLine2.innerHTML += ' screenshot is ready';
  
        // If an error occurs while trying to take the screenshot, e.detail will be empty.
        // We could either retry or return control to the user
        if (!e.detail) {
          return
        }
  
        // e.detail is the base64 representation of the JPEG screenshot
        image.src = 'data:image/jpeg;base64,' + e.detail
  
        // Show the photo
        container.classList.add('photo')
      })
    }
  })