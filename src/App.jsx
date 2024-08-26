// App Component
import './App.css'
import {Header} from "./componenets/header"
import Images from "./componenets/images"
import {Footer} from "./componenets/footer"

function App() {
  return (
    <div>
      <div className="mobile-mb" > 
        <Header />
      </div>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        <Images src="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" />
        <Images src="https://images.pexels.com/photos/221011/pexels-photo-221011.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" />
        <Images src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" />
        <Images src="https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" />
        <Images src="https://images.pexels.com/photos/34579/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 5" />
        <Images src="https://images.pexels.com/photos/18024478/pexels-photo-18024478/free-photo-of-mac-studio-computer-and-macbook-pro-laptop-on-a-white-desk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 6" />
        <Images src="https://images.pexels.com/photos/4006123/pexels-photo-4006123.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 7" />
        <Images src="https://images.pexels.com/photos/4006143/pexels-photo-4006143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 8" />
        <Images src="https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Image 10" />
      </div>
      
     <Footer />
    </div>
  )
}

export default App;
