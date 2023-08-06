"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const ratings = [1, 2, 3, 4, 5];

  const [rates, setRates] = useState("");
  const [thanks, setThanks] = useState("hidden");
  const [rating, setRating] = useState(0);

  function handleClick(items) {
    setRating(items);
  }

  function handleSubmit() {
    if(rating !== 0){
      setRates("hidden");
      setThanks("");
    }
    return;
  }

  return (
    <main className="max-w-sm max-h-fit p-8">
      <section className={`flex flex-col gap-6 ${rates}`}>
        <div className="icon-container">
          <Image
            alt="star icon"
            src={"./icon-star.svg"}
            height={9999}
            width={9999}
          />
        </div>
        <h2 className="text-2xl">How did we do?</h2>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="stars flex justify-between">
          {ratings.map((items) => (
            <li
              key={items}
              id={items}
              className={`star-rate rounded rounded-full ${
                rating === items ? "selected" : ""
              }`}
              onClick={() => handleClick(items)}
            >
              {items}
            </li>
          ))}
        </ul>
        <button
          className="submit p-3 rounded rounded-full tracking-widest"
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </section>
      <section
        className={`flex flex-col gap-7 items-center justify-center text-center ${thanks}`}
      >
        <Image
          alt="illustration thank you"
          width={9999}
          height={9999}
          className="thank-image"
          src={"./illustration-thank-you.svg"}
        />
        <span className="pill px-3 py-2 rounded rounded-full">
          You selected {rating} out of 5
        </span>
        <h1 className="text-2xl">Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </section>
    </main>
  );
}
