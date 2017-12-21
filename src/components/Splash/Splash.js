import React, { Component } from 'react'
import './Splash.css'

class Splash extends Component {
  componentDidMount() {
    window.requestAnimFrame = (function(callback) {
      return window.requestAnimationFrame || 
      window.webkitRequestAnimationFrame || 
      window.mozRequestAnimationFrame || 
      window.oRequestAnimationFrame || 
      window.msRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60)
        }
    })()

    // canvas
    let canvasElement
    let canvasContext

    // distance of hill-set
    let hillsetDistance = 1000

    // width and height of canvas
    let maxX = 1000
    let maxY = 1000

    // higher = above
    let viewpoint = 230

    let halfWidth = maxX / 2
    let halfHeight = maxY / 2
    let marginLeft = 0
    let marginTop = -10.0
    let marginBottom = 0

    // color update
    // let colourUpdate = 0

    function drawCanvas() {
      canvasElement = document.getElementById('canvas')
      canvasContext = canvasElement.getContext('2d')
      setInterval(hillsAndValleys, 60)
    }

    // 2d to 3d conversion
    function dConversion(x3d, y3d, z3d) {
      // scale = dist / dist + z3d
      let scale = hillsetDistance / (hillsetDistance + z3d)

      // x2d to x3d - half w * scale + half w
      let scaleX = ((x3d - halfWidth) * scale) + halfWidth

      // y2d to y3d - half w * scale + half w *.01
      let scaleY = ((y3d - halfHeight) * scale) + halfHeight - (z3d * 0.01)

      // return x2d, y2d vals
      return [scaleX, scaleY]
    }

    // control height and length of peaks
    function noise(x, y) {
      return (Math.sin(y * 0.172) + Math.sin((x + (y * 0.347)) * 0.2)) * 2.55
    }

    // make hills & valleys
    function hillsAndValleys() {

      // set canvas bg
      canvasContext.fillStyle = "#0D0D0D"
      canvasContext.fillRect(0, 0, maxX, maxY)
      marginBottom += 1
      marginLeft += 1

      // increment color value
      // colourUpdate -= 0.5

      // line width
      canvasContext.lineWidth = .22

      // valley crevices counter - equals max x / view point
      let creviceCount = maxX / viewpoint

      // set shift
      let shiftLeft = (marginLeft % 1) * viewpoint
      let shiftBottom = (marginBottom % 1) * viewpoint

      // 2d starting points  
      let array2d = [0, 0]

      // z axis crevice loop 
      // for z crevices = 100 >=10 decrease them (forward movement effect)
      // for (let zCrevices = 100 zCrevices >= 10 zCrevices--) {
      for (let zCrevices = 50; zCrevices >= 10; zCrevices--) {
        canvasContext.beginPath()
        let edgeBoundary = zCrevices * 1.25
        let zPosition = (zCrevices * viewpoint) - shiftBottom
        let creviceLineVisibility = false

        // stroke colour 
        // canvasContext.strokeStyle = "hsla(" + (colourUpdate % 360) + ",100%,50%,1)"
        canvasContext.strokeStyle = "rgba(211, 211, 247, 0.2)"
        let firstPoint = true

        for (let creviceX = -edgeBoundary; creviceX <= creviceCount + edgeBoundary; creviceX++) {
          let horizon = noise(creviceX + marginLeft, marginBottom + zCrevices)
          let xPosition = (creviceX * viewpoint) - shiftLeft
          let yPosition = (horizon - marginTop) * viewpoint
          array2d = dConversion(xPosition, yPosition, zPosition)

          if (array2d[1] > maxX) {
            array2d[1] = maxY
          } else if (array2d[1] < 0) {
            array2d[1] = 0
          } else {
            creviceLineVisibility = true
          }

          if (firstPoint) {
            canvasContext.moveTo(array2d[0], array2d[1])
            firstPoint = false
          } else {
            canvasContext.lineTo(array2d[0], array2d[1])
          }
        }

        if (creviceLineVisibility) {
          canvasContext.stroke()
        }
      }
    }

    window.requestAnimFrame(drawCanvas)

    // setTimeout(function() {
      document.getElementById('canvas').className += ' canvas--show'
    // }, 500)
  }

  render() {
    return (
      <canvas className="canvas" id="canvas" width={1000} height={1000} />
    )
  }
}

export default Splash
