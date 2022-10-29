import { HomeContainer } from "./style";
import { Products,Slider } from "./index";


import "swiper/css";
import "swiper/css/navigation";

function Home() {
  return (
    <HomeContainer>
        <Slider />
        <Products />
    </HomeContainer>
  );
}

export default Home;
