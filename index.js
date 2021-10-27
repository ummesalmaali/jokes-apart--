// get https://icanhazdadjoke.com/

const jokes = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

// now defining the function for generating jokes
const generateJokes = async () => {
  try {
    const setHeader = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await fetch("https://icanhazdadjoke.com/", setHeader);
    const data = await res.json();
    data.innerHTML = data.joke;
  } catch (err) {
    console.log(`the errpr is ${err}`);
  }
};

jokeBtn.addEventListener("click", generateJokes);
generateJokes();
