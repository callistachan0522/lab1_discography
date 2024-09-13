import { createElement } from "react";

function App() {

  const heading = 'Enhypen';

  const enha = "https://files.enhypen-jp.weverse.io/files/images/limitedB_e9676ae90cf16087b4abe29f5183f6b8.jpg";

  const first = "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/1c/89/10/1c891026-08a1-bbcd-e18e-b5acfe0bd2c7/196922402876_Cover.jpg/1200x1200bf-60.jpg";

  const second = "https://blueprintkpop.store/cdn/shop/files/5e063185-b60c-418a-bec4-4dad5d6d00d9.jpg?v=1719501925&width=1445";

  const content = (
    <>
      <h1>{heading}</h1> 
      <img src={enha} alt=" " className="photo" />
      <div>
        <img src={first} alt=" " className="fphoto" />
        <details className="album1">
        <summary>Dark Blood</summary>
          <ol>
            <li>Fate</li>
            <li>Bite Me</li>
            <li>Sacrifice (Eat Me Up)</li>
            <li>Chaconne</li>
            <li>Bills</li>
            <li>Karma</li>
          </ol>
        
        </details>
      </div>
      <div>
        <img src={second} alt=" " className="sphoto" />
        <details className="album1">
        <summary>Romance:Untold</summary>
          <ol>
            <li>Moonstruck</li>
            <li>XO (Only If You Say Yes)</li>
            <li>your Eyes Only</li>
            <li>Hundred Broken Hearts</li>
            <li>Brought The Heat Back</li>
            <li>Paranormal</li>
            <li>Royalty</li>
            <li>Highway 1009</li>
            <li>XO (Only If You Say Yes)(English ver.)Feat.JVKE</li>
          </ol>
        
        </details>
      </div>
      

    </>
    );

  return content;
}

function Greeting() {

  const greeting = <p>Hello, React</p>;

  const greeting2 = createElement('p', null, 'Hello, React');

  return greeting2;
}

export default App
