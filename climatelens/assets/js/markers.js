
// Manages the position of the image target.
AFRAME.registerComponent('image-target', {
    init: function () {
      // const debugText1 = document.getElementById('debug-text-status-1');
      // const debugText2 = document.getElementById('debug-text-status-2');
      // const debugText3 = document.getElementById('debug-text-status-3');
      const videoContainer = document.getElementById("adj-vid");
      const element_menu = document.getElementsByTagName("header")[0];

      const {object3D, sceneEl} = this.el
      object3D.visible = false
      // Sets the position of the frame to match the image target.
      const showImage = ({detail}) => {
          console.log('showing image, image found');
          object3D.position.copy(detail.position)
          object3D.quaternion.copy(detail.rotation)
          object3D.scale.set(detail.scale, detail.scale, detail.scale)
          object3D.visible = true

          // videoContainer.play();
          
      }
  
      // Update the position of the frame when the image target is found or updated.
      sceneEl.addEventListener('xrimagefound', showImage)
      sceneEl.addEventListener('xrimageupdated', showImage)
  
      // Hide the image target when tracking is lost.
      sceneEl.addEventListener('xrimagelost', () => {
        object3D.visible = true;
      });

      // When reality is ready initiate scene
      sceneEl.addEventListener('realityready', () => {
        console.log('Reality Ready');

        const element_menu = document.getElementsByTagName("header")[0];

        // const debugText1 = document.getElementById('debug-text-status-1');
        // const debugText2 = document.getElementById('debug-text-status-2');
        // const debugText3 = document.getElementById('debug-text-status-3');

        // set menu to be on top of everything else.
        element_menu.setAttribute("style", "z-index: 999;");
        // debug text
        // debugText1.innerHTML = "Initialized XR Experience"
        console.log('>>> XR Experience started.');
      });



    }
  })
  
  // Displays the name of the image target as it was set in the 8th Wall console.
  AFRAME.registerComponent('targetname', {
    init: function () {
      const el = this.el
      // const log = document.getElementById('details-name')
      // el.sceneEl.addEventListener('xrimagefound', ({detail}) => {
      //   log.innerText = "found yo" + " " + detail.name
      //   console.log('image found');
      //   el.setAttribute(
      //     'value', detail.name.length > 20 ? `${detail.name.substring(0, 17)}...` : detail.name)
      // })
    }
  })


const onxrloaded = () => {
  console.log('XR Loaded');
  // XR.addCameraPipelineModules([  // Add camera pipeline modules.
  //   // Existing pipeline modules.
  //   XR.FullWindowCanvas.pipelineModule(),   // Modifies the canvas to fill the window.
  //   XR.GlTextureRenderer.pipelineModule(),  // Draws the camera feed.
  // ])

  // // Request camera permissions and run the camera.
  // XR.run({canvas: document.getElementById('camerafeed')})
}

  