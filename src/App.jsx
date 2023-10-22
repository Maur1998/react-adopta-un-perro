import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Header } from './components/Header'
import { MyCard } from './components/MyCard'
import { Footer } from "./components/Footer";

function App() {

  return (
    <div className="container-fluid">
      <Header title="Adopta un perrito" className="header"/>
      <div className="row d-flex justify-content-center">
        <MyCard url="https://www.nunpet.es/blog/wp-content/uploads/2021/12/beagle1.jpg" name="Kuma" desc="Lleno de energía y listo para jugar. !Dale a Kuma el hogar amoroso que se merece!" text="Beagle" color="danger"/>
        <MyCard url="https://png.pngtree.com/thumb_back/fh260/background/20220701/pngtree-little-siberian-husky-puppywhite-with-black-sit-siberian-pedigree-photo-image_32221910.jpg" name="Loki" desc="Es juguetón, amigable y se lleva bien con niños y otros animales." text="Husky" color="primary"/>
        <MyCard url="https://images.hola.com/imagenes/estar-bien/20200828174216/razas-perro-dalmata-gt/0-859-148/dalmata-t.jpg" name="Punto" desc="Un perro con un corazón gigante. Hazte amigo de Punto y experimenta un amor incondicional!" text="Dálmata" color="success"/>
        <MyCard url="https://verdecora.es/blog/wp-content/uploads/2021/04/como-es-conejo.jpg.webp" name="Esquilax" desc="El mítico perro con cabeza de conejo y cuerpo de conejo" text="Esquilax" color="dark"/>
      </div>
      <Footer />
    </div>
  )
}

export default App
