"use strict";function Deck(){self.card=["cat","cat","hat","hat","pumpkin","pumpkin","bone","bone","rip","rip","ghost","ghost","boiler","boiler","skull","skull","boilerOrange","boilerOrange","candy","candy"]}function _showCards(){for(var e=0;e<20;e++){var d=document.createElement("li");d.classList.add("card","front-card"),d.value=e,allCards.appendChild(d)}for(var a=document.getElementsByClassName("card"),r=0;r<a.length;r++)a[r].addEventListener("click",function(){1===++count&&(this.classList.add("card-"+card[this.value]),first_Card=card[this.value],firstCard_Value=this.value,firstCard_Id=this),2===count&&(this.classList.add("card-"+card[this.value]),second_Card=card[this.value],secondCard_Value=this.value,secondCard_Id=this,console.log(secondCard_Value,second_Card),setTimeout(function(){first_Card===second_Card?firstCard_Value!==secondCard_Value?(firstCard_Id.classList.add("hideCard"),secondCard_Id.classList.add("hideCard"),score.innerText=count_Score+=100,high_Score.innerText=score.innerText,count=0):count=1:(count=0,firstCard_Id.className=" ",secondCard_Id.className=" ",firstCard_Id.classList.add("card","front-card"),secondCard_Id.classList.add("card","front-card"))},900))})}Deck.prototype={contructor:Deck,deckRandom:function(){Deck(),this.randomDeck=new Array;for(var e=!1;!e;){var d=Math.floor(Math.random()*self.card.length);this.randomDeck.push(self.card[d]),self.card.splice(d,1),self.card.length<=0&&(e=!0)}for(var a=0;a<this.randomDeck.length;a++)self.card[a]=this.randomDeck[a]}};var deck=new Deck;deck.deckRandom();var allCards=document.getElementById("all-cards"),score=document.getElementById("score"),high_Score=document.getElementById("highScore"),count=0,count_Score=0,first_Card=void 0,second_Card=void 0,firstCard_Id=void 0,secondCard_Id=void 0,firstCard_Value=void 0,secondCard_Value=void 0;_showCards(),"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.log("SW registration failed: ",e)})});