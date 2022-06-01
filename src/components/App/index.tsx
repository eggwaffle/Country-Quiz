import Main from '../Main';
import Footer from '../Footer'
import background from "../../assets/images/background.png";

const App = () => {
  return (
    <div className='h-screen grid justify-center' style={{backgroundImage: `url(${background})`}}>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
