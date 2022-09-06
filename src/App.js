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
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Some Meta Title',
  description: 'I am a description, and I can create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags'
    }
  }
};
function App(props) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }, [])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="App">
      {/* <DocumentMeta {...meta}> */}
        <h1>Hello World!</h1>
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
              url={window.location.href}
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
      {/* </DocumentMeta> */}
    </div>
  );
}

export default App;
