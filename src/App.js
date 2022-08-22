import React from 'react';
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';
import './App.css';
import HelmetMetaData from './Helmet';

function App(props) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },5000)
  },[])

  if(isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      
      {/* <HelmetMeta /> */}
      <div className="">
      <p className="font-weight-bold">このソーシャルを共有する</p>
      <div 
      class="fb-share-button" 
      data-href="https://demo-sns-longnv141.vercel.app/" 
      data-layout="button_count" data-size="small"><a target="_blank" href="http://localhost:3000/" class="fb-xfbml-parse-ignore">Chia sẻ</a></div>
      <div
        style={{ width: '60%', margin: '8px auto' }}
        className="d-flex align-items-center justify-content-around"
      >
        <FacebookShareButton
          url={"https://demo-sns-longnv141.vercel.app/"}
          quote={props?.quote}
          hashtag={props?.hashtag}
        >
          <FacebookIcon size={48} borderRadius={32} />
        </FacebookShareButton>
        <LineShareButton
          url={"https://demo-sns-longnv141.vercel.app/"}
          quote={props?.quote}
          hashtag={props?.hashtag}
        >
          <LineIcon size={48} borderRadius={32} />
        </LineShareButton>
        <TwitterShareButton
          url={"https://demo-sns-longnv141.vercel.app/"}
          quote={props?.quote}
          hashtag={props?.hashtag}
        >
          <TwitterIcon size={48} borderRadius={32} />
        </TwitterShareButton>
      </div>
    </div>
    </div>
  );
}

export default App;
