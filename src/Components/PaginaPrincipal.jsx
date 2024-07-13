import { FooterPrincipal } from "./FooterPrincipal"
import { HeaderPrincipal } from "./HeaderPrincipal"
import circulo from '../assets/img/circulo.jpg'


const Tweet = () => {
  return (
    <div className="  flex p-3 mb-5 place-content-baseline">
      <div className="avatar">
        <img src= {circulo} alt="Avatar" className="w-12 h-12 rounded-full" />
      </div>
      <div className="content">
        <div className="header mb-2">
          <p className=" text-[#9333EA] justify-center text-lg font-semibold">Username</p>
          <label className="subtitulo2 text-sm text-gray-500">5 min read</label>
        </div>
        <label className="text-[#9333EA]  text-xl font-bold">A Day in the Park</label>
        <p className="text-gray-700">Exploring the beauty of nature in our local park. 🌳 #NatureLovers</p>
        <img src='' alt='' className="w-full h-auto my-2 rounded-lg" />
        <div className="footer flex items-center space-x-4 text-gray-500 text-sm">
          <span>yyuuu</span>
          <button className="like-button">Me gusta</button>
          <button className="retweet-button">Retwittear</button>
        </div>
      </div>
    </div>
  );
};

export const PaginaPrincipal = () => {
  return (
    <>
  <HeaderPrincipal/>
 
  <div className="justify-center p-3 mb-5">
        <div className="timeline space-y-4 ">
          <Tweet 
            avatarSrc={circulo} 
            username="Username" 
            time="5 min read" 
            title="A Day in the Park" 
            content="Exploring the beauty of nature in our local park. 🌳 #NatureLovers." 
            imgSrc="../imgs/park.jpg" 
            date="2024-05-28"
          />
          <Tweet 
            avatarSrc="../imgs/foto.jpg" 
            username="CoffeeLover" 
            time="2 cups a day ☕" 
            title="Morning Ritual" 
            content="There's nothing quite like the first sip of coffee in the morning. #CoffeeTime ☀️☕" 
            imgSrc="../imgs/cafe.jpg" 
            date="2024-05-29"
          />
          <Tweet 
            avatarSrc="../imgs/foto1.jpg" 
            username="TravelBug" 
            time="Exploring the world 🌍✈️" 
            title="Sunset at the Beach" 
            content="Capturing the breathtaking beauty of a sunset at the beach. #Wanderlust 🌅" 
            imgSrc="../imgs/playa.jpg" 
            date="2024-05-30"
          />
          <Tweet 
            avatarSrc="../imgs/foto2.jpg" 
            username="Adventurer" 
            time="Seeking the next great journey 🌄" 
            title="Mountain Expedition" 
            content="Conquer the untamed wilderness and reach new heights. #AdventureAwaits ⛰️" 
            imgSrc="../imgs/montaña.jpg" 
            date="2024-05-29"
          />
        </div>
        
    
      
    </div>
    

     
<FooterPrincipal/>
    </>

    
  )
}
