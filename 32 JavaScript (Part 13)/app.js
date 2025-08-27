// Using Axios
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try{
//     let res = await axios.get(url);
//     console.log(res.data.fact);
//   } catch(e){
//     console.log("Error - ", e);
//   }
// }
// console.log(getFacts());


// let btn = document.querySelector("button");
// btn.addEventListener("click", async ()=> {
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// })

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try{
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch(e){
//     return "No Fact Found";
//   }
// }
// console.log(getFacts());



// Sending Headers with api request
// const url = "https://icanhazdadjoke.com/";

// async function getJokes(){
//     try{
//         const config = {headers: {Accept: "application/json"}}
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch(err){
//         console.log(err);
//     }
// }
// console.log(getJokes());

