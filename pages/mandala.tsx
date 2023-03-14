import Image from 'next/image'
import Canvas from '../components/Canvas'
import CanvasRadioButtons from '../components/CanvasRadioButtons'

export default function Home() {
  return (
    <>
      <header>
        <h1>A simple drawing app experiment.</h1>
      </header>
      <main>

        <Canvas width={800} height={400} selectedOption="mirrorSides" />
        <div>
          <CanvasRadioButtons />
        </div>

        <footer>
          <Image src="./logo.svg" height="200" width="200" alt="logo" />
        </footer>
      </main>
    </>
  )
}
