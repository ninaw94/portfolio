import { useEffect, useRef, useState } from 'react'
//import './Stream.css'
import React from 'react'
//import fallbackVideo from './fallback1.mp4'

function Stream() {
  const [playing, setPlaying] = useState<boolean>(false)
  const [selectedFilter, setSelectedFilter] = useState<string>('grayscale')
  const [filterValue, setFilterValue] = useState<number>(100)

  const myVideo = useRef<HTMLVideoElement|null>(null)
  const myCanvas = useRef<HTMLCanvasElement|null>(null)

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 400, height: 300 }, audio: false })
        myVideo.current!.srcObject = stream
      } catch(error) {
        console.log(error)
        myVideo.current!.src = '/fallback1.mp4'
        myVideo.current!.loop = true
      } finally {
        setPlaying(true)
      }
    }
    startVideo()
  }, [])

  useEffect(() => {
    if (playing) {
      applyFilter()
    }
  }, [selectedFilter, filterValue, playing])

  const applyFilter = () => {
    if (myCanvas.current) {
      const canvasContext = myCanvas.current.getContext('2d')
      if (canvasContext) {
         // Value in Pixel umwandeln
      if (selectedFilter === 'blur') {
        // range anpassen
        const filteredValue = Math.min(filterValue, 10);
        canvasContext.filter = `${selectedFilter}(${filteredValue}px)`} else{
        canvasContext.filter = `${selectedFilter}(${filterValue}%)`}
        canvasContext.drawImage(myVideo.current!, 0, 0)
      }
    }
  }


  const snapshotJSX = playing && (
    <>
      <button onClick={() => {
        applyFilter()
      }}>Snapshot</button><br/>
      <canvas width={400} height={300} ref={myCanvas}></canvas><br/>
      <fieldset>
        <legend>Select Filter:</legend>
        <label>
          <input type="radio" name="filter" value="grayscale" checked={selectedFilter === 'grayscale'} onChange={() => setSelectedFilter('grayscale')} />
          Grayscale
        </label><br/>
        <label>
          <input type="radio" name="filter" value="sepia" checked={selectedFilter === 'sepia'} onChange={() => setSelectedFilter('sepia')} />
          Sepia
        </label><br/>
        <label>
          <input type="radio" name="filter" value="blur" checked={selectedFilter === 'blur'} onChange={() => setSelectedFilter('blur')} />
          Blur
        </label><br/>
        <label>
          <input type="radio" name="filter" value="invert" checked={selectedFilter === 'invert'} onChange={() => setSelectedFilter('invert')} />
          Invert
        </label><br/>
      </fieldset>
      <fieldset>
        <legend>Adjust Filter:</legend>
        <label>Filter Value: {filterValue}</label>
        <input type="range" min="0" max="100" value={filterValue} onChange={(e) => setFilterValue(parseInt(e.target.value))} />
      </fieldset>
    </>
  )

  return (
    <>
      <h4>Rimbert-Cam</h4>
      <video width={400} height={300} autoPlay muted ref={myVideo} className="grayscale"/><br/>
      {snapshotJSX}
    </>
  )
}

export default Stream
