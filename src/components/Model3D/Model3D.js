import './Model3D.css'
import TeslaTequila3D from '../../assets/glb/tesla_tequila.glb'
import PosterTeslaTequila from '../../assets/img/poster-tesla-tequila.png'

export const Model3D = () => {
  return (
    <div className="model-3d">
      <model-viewer
        alt="Tesla Tequila"
        src={TeslaTequila3D}
        poster={PosterTeslaTequila}
        shadow-intensity="1"
        camera-controls
        touch-action="pan-y"
        camera-orbit="65deg 85deg"
      >
      </model-viewer>
    </div>
  )
}
