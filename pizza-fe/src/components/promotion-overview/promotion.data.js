import React from "react";

const PROMOTION_DATA = [
  {
    text: "What's Sicilian Pizza?",
    suppliText: "Click here to find out more!",
    img: 'https://cdn.tasteatlas.com/images/dishes/45a5e559c33a4d4ebd70851df05f5061.jpg?mw=1300',
    pathTo: "https://www.pinocchiospizza.net/sicilian_vs_regular.html"
  },
  {
    text: "Want to dine in? Find us here!",
    suppliText: "Feel the vibe and wonderful aroma of our pizzas",
    img: 'http://4.bp.blogspot.com/_NKy3J_Ol6JU/TOFzNUIcnmI/AAAAAAAAANk/d1GCd69CUIY/s320/566.JPG',
    pathTo: "https://www.pinocchiospizza.net/directions.html"
  },
  {
    text: "See more discount!",
    img: false,
    pathTo: "/menu",
    display: <iframe width="400" height="200" src="https://www.youtube.com/embed/hoM7PJu6V-E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  }
];

export default PROMOTION_DATA;