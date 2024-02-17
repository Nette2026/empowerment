/*
Step 1: Build the game in html/css using only the basic element to be used in javascript.

Only the welcome page will display. 

Step 2: Link the buttons in the html to js.

Step 3: Create an eventlistener and make the button clickable.

Step 4: Hide the welcome page and display the game page if the player clicks the play button. If the player clicks the quit button the game will be over.  

Step 5: List the different emotions the player can choose from.

Step 6: Make a function that will display the result.

Step 7: After the message is displayed the player will have the choice to continue to play or quit the game. 
*/ 
class Game {
    constructor () {   
        
        this.sectionContainer = document.getElementById('sec');
        this.contentContainer = document.getElementById('content');
        this.introContainer = document.querySelector('.intro');
        this.playBtn = document.getElementById('play'); 
        this.quitBtn = document.getElementById('quit');
        this.content1 = document.querySelector('.content1');
        this.content2 = document.querySelector('.content2');
        this.answer = document.querySelector('.cate');
        
        
        
        
    }
    
    //  Initializes
    init(){
        quitBtn.addEventListener('click', ()=> {
            content.classList.remove('d-none')
            content.classList.add('d-block')
            introContainer.classList.add('d-none')
            // console.log('click');
         })
         
         playBtn.addEventListener('click', ()=> {
             content2.classList.remove('d-none')
             content2.classList.add('d-block')
             introContainer.classList.add('d-none')
         })
        
     }
         
         /*Once Question/Content display make the answer clickable. */
         
 
 // happy = document.getElementById('happyBtn')
 // Make an array of objects 
 // Each object is going to be the  different emotions
 
 /**
  * 
  * arr = [
  *  {
  *      id: 1,
  *      emotion: 'happy',
  *      image: [img1, img2, img3, ..., imgN],
  *      avatar: img,
  *      quote: string
  * }
  * ]
 */
 
 
 
 const emotions = [
     
     
     {
         id: 1,
         emotion: 'Angry',
         image: ["angry1.jpg", "angry2.jpg", "angry3.jpg", "angry4.jpg", "angry5.jpg"],
         // avatar: image,
         quote: 'You are a warrior!!'  
         
     },
 
     {
         id: 2,
         emotion: 'Empowerment',
         image: ["empowerment1", "empowerment2", "empowerment3", "empowerment4", "empowerment5"],
         //  avatar: image,
         quote: 'You are a warrior!!'
     } 
     ,
         
    {
         
             id: 3,
             emotion: 'Happy',
             image: ["happy1", "happy2", "happy3", "happy4", "happy5"],
             //     avatar: image,
             quote: 'You are a warrior!!'
    },
         
    {
             
          id: 4,
          emotion: 'Inspirational',
          image: ["inspirational1", "inspirational2", "inspirational3", "inspirational4", "inspirational5"],
          //     avatar: image,
          quote: 'You are a warrior!!'
    },
         
    {
             id: 5,
             emotion: 'Life-Lesson',
             image: ["lesson1", "lesson2", "lesson3", "lesson4", "lesson5"],
             //     avatar: image,
             quote: 'You are a warrior!!'
    },
         
    {
             
         id: 6,
         emotion: 'Sad',
         image: ["sad1", "sad2", "sad3", "sad4", "sad5"],
         //     avatar: image,
         quote: 'You are a warrior!!'
         
    },
     
    {
         
         id: 7,
         emotion: 'Wisdom',
         image: ["wisdom1", "wisdom2", "wisdom3", "wisdom4",  "wisdom5"],
         //     avatar: image,
         quote: 'You are a warrior!!'
    }
 ]
    
 
 
//  console.log(emotions);
 
 
 
 // console.log(emotions[0].image[1])
 
 
 
 // getData() {
     
     // idx = Math.floor(Math.random() * this.image.length)
     
     // let data = this.gameQuestions[idx]
     
     
     // }
     
     //Add a  eventlistener to the answer that is selected.
     
 }
     
     
     
     
     
     
     
 
 
 
     
 
     
     
     
     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 