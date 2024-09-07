import { useState, useEffect } from "react";

export default function Coupon() {
    const [toggle, setToggle] = useState(false)
  const [giftCard, setGiftCard] = useState(
    {
        firstName: "Jennifer",
        lastName: "Smith",
        text: "Free dinner for 4 guests",
        valid: true,
        instructions: "To use your coupon, click the button below.",
    }
  );

  function spendGiftCard() {
    setGiftCard(prevState => {
        return {
            ...prevState,
            text: "Your coupon has been used.",
            valid: false,
            instructions: "Please visit our restaurant to renew your gift card..",
        }
    });
  }

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to the page" : "This is a useEffect hook"
  }, [toggle])

  const [user, setUser] = useState([]);
  const fetchData = () => {
    fetch(`https://randomuser.me/api/?results=1`)
    .then((response) => response.json())
    .then((data) => setUser(data))
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{padding: '40px'}}>
      <h1>
        Gift Card Page
      </h1>
      <h2>
        Customer: {giftCard.firstName} {giftCard.lastName}
      </h2>
      <h3>
        {giftCard.text}
      </h3>
      <p>
        {giftCard.instructions}
      </p>
      {
        giftCard.valid && (
          <button onClick={spendGiftCard}>
            Spend Gift Card
          </button>
        )
      }

      <div>
        <h1>This is a useEffect sample</h1>
        <button onClick={clickHandler}>Toggle Message</button>
        {toggle && <h1>Welcome to the page</h1>}
      </div>

      {Object.keys(user).length > 0 ?
        <div>
          <h1>Customer Data</h1>
          <h2> Name: {user.results[0].name.first}</h2>
          <img src={user.results[0].picture.large} alt="Sample" />
        </div> : <h1>Pending Data</h1>
      }
      
    </div>
  );
}