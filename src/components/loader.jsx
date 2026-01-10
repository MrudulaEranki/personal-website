import '../styles/loader.css';
import dino1 from '/dino1.png';
import dino2 from '/dino2.png';
import dino3 from '/dino3.png';

export default function Loader() {
  return (
    <div className="loader_container">
      <div className="orbit">
        <img src={dino1} alt="dino" className="dino dino1" />
        <img src={dino2} alt="dino" className="dino dino2" />
        <img src={dino3} alt="dino" className="dino dino3" />
      </div>
    </div>
  );
}
