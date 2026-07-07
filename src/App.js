import UserProfile from './UserProfile';
import {Welcome, User} from './UserProfile';
import {names, cbMap, users, StyledText} from './utils';
import Ai from './Ai.js'
import Shop from './Shop'
import Btn from './Btn'
import Counter from './Counter.js';
import Key from './Key.js';
import LoginForm from './Form.js';
import PaintDot from './PaintDot.js';
import Game from './Game.js';
import AiSugg from './AiSugg.js';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './home.js';
import UserDetail from './UserDetail.js';
import UserCard from './UserCard.js';
import UserList from './UserList.js';
import Library from './Library.js';
// import BookDetail from './BookDetail.js';
import UserPic from './UserPic.js';
import NotFound from './NotFound.js';
import {Navigate} from 'react-router-dom';
import './App.css'
import {Twitter, Instagram} from 'react-bootstrap-icons';
import AIParent from './AIReply.js';
import CountLikes from './CountLikes.js';
import { useState, useEffect } from 'react';
import ExternalAIInsights from './ExternalData.js';
import SliderCarousel from './SliderCarousel.js';

function App() {
  let userArray = [
  {
    name: "Cuban",
    pic: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Travel fan. Hipster-friendly tv scholar. Friendly communicator. Coffee enthusiast.",
  },
  {
    name: "Spencer",
    pic: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
    bio: "Award-winning web lover. Thinker. Social media advocate. Creator. Bacon scholar. Zombie geek",
  },
  {
    name: "Robert",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2C_xadF4WT19MkU5PpYyU8njyMgMIuttwXQ&usqp=CAU",
    bio: "Professional communicator. Travel scholar. Friendly music junkie. Hardcore zombie aficionado",
  },
  {
    name: "Einstein",
    pic: "https://media.istockphoto.com/id/1179420343/photo/smiling-man-outdoors-in-the-city.jpg?s=612x612&w=0&k=20&c=81-gOboGEFSyCFXr09EguDmV0EObFT5usAms1wyFBh8=",
    bio: "Typical travel guru. Friendly entrepreneur. Zombie expert. Thinker. Pop culture evangelist",
  },
];

    let [show, setShow] = useState(false);

  return (
    <div className="App">
      <nav className='nav-list'>
          <Link to="/carousel">visit Carousel</Link>
          <Link to="/ai-sug">visit Ai suggestion</Link>
          <Link to="/insights">visit AI Insights</Link>
          <Link to="/shop">visit Shop</Link>
          <Link to="/users">visit Users</Link>
          <Link to="/books">visit Books</Link>
          <Link to="/secs">visit Seconds page</Link>

      </nav>

          <button onClick={() => setShow(!show)}>Toggle {show ? "stop" : "start"}</button>

          {show ? <Timer /> : null}
      
    
    
      <Routes>
      <Route path='/ai-suggestion'   element={<AiSugg />} />
      <Route path='/ai-sug' element={<Navigate replace to="/ai-suggestion"  />} />
      <Route path='/game' element={<Game />} />
      <Route path='/shop' element={<Shop /> } />
      <Route path='/' element={<Home /> } />
      <Route path='/users' element={<UserList userArr={userArray} /> } />
      <Route path='/users/:id' element={<UserDetail userArr={userArray} /> } />
      <Route path='/books' element={<Library /> } />
      <Route path='/user-pic' element={<UserPic /> } />
      <Route path='/ai-reply' element={<AIParent /> } />
      <Route path='/count-likes' element={<CountLikes /> } />
      <Route path='/insights' element={<ExternalAIInsights /> } />
      <Route path='/carousel' element={<SliderCarousel /> } />
      
      <Route path='*' element={<NotFound /> } />
      
      {/* <Route path='/books/:id' element={<BookDetail /> } /> */}
      {/* <PaintDot /> */}
      {/* <LoginForm />
      <Key />
      <Counter /> */}

      {/* <Btn /> */}

        {/* {users.map(user => (<User name={user.name} age={user.age} />))} */}

        {/* {names.map(cbMap)} */}

        {/* <UserProfile /> */}
        {/* <StyledText text="Hello World" /> */}
        </Routes> 

        <footer>
          <p>Follow me on social media</p>
          <Twitter size={30} color="blue" />
          <Instagram size={30} color="purple" />
        </footer>
    </div>
  );
}

function Timer() {
    let [time, setTime] = useState(0);

    // Empty dependency array: triggers the CB function only on mounting (initial render)
    useEffect(() => {
        console.log("Timer Component mounted");

        let intervalId = setInterval(() => {
            // setTime(time + 1)
            console.log("Timer Started",)
            setTime((prevVal) => prevVal + 1)
        }, 1000)

        return () => {
            console.log("Timer Component unmounted");
            clearInterval(intervalId)
        }

    }, [])


    return (
        <div>
            <h1>Timer: {time} seconds </h1>            
        </div>
    )
}

export default App;
