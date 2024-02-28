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
const sectionContainer = document.getElementById('sec'); 
const contentContainer = document.getElementById('content');
const introContainer = document.querySelector('.intro');
const playBtn = document.getElementById('play'); 
const quitBtn = document.getElementById('quit');
const playchoices = document.querySelector('.playchoices');
const content1 = document.querySelector('.content1');
const content2 = document.querySelector('.content2');
const content3 = document.querySelector('.content3');
const content4 = document.querySelector('.content4');
const content5 = document.querySelector('.content5');
const content6 = document.querySelector('.content6');
const content7 = document.querySelector('.content7');
const answer = document.querySelector('.cate');
const quitGame = document.querySelector('.quitGame');
const restartBtn = document.querySelector('.restartGame');

let about = document.querySelector('.about');
let choice = document.querySelector('.choice');
let music = document.querySelector('.music');

let happyBtn = document.getElementById('happyBtn');
let sadBtn = document.getElementById('sadBtn');
let angryBtn = document.getElementById('angryBtn');
let empowermentBtn = document.getElementById('empoweringBtn');
let inspiredBtn = document.getElementById('inspiredBtn');
let life_LessonBtn = document.getElementById('lifeLessonBtn');
let wisdomBtn = document.getElementById('wisdomBtn');

let feelingAngry = document.getElementById('feelingAngry');
let feelingEmpowered = document.getElementById('feelingEmpowered');
let feelingHappy = document.getElementById('feelingHappy');
let feelingInspired = document.getElementById('feelingInspired');
let feelingLife_Lesson = document.getElementById('feelingLifeLesson');
let feelingSad = document.getElementById('feelingSad');
let feelingWise = document.getElementById('feelingWise');
let quit = document.querySelector('.quit');
let continueBtn = document.querySelector('.continue');
let continue2 = document.querySelector('.continue2');
let quit2 = document.querySelector('.quit2');



// let sound = new Audio('audio/empowering.mp3');

// quest.innerText = "How do you feel today?";


quitBtn.addEventListener('click', ()=> {
    content1.classList.remove('d-none')
    content1.classList.add('d-block')
    introContainer.classList.add('d-none')
    // console.log('click');
 })
 
 playBtn.addEventListener('click', ()=> {
    //  content2.classList.remove('d-none')
    //  content2.classList.add('d-block')
     playchoices.classList.remove('d-none')
     playchoices.classList.add('d-block')
     introContainer.classList.add('d-none')
 })

about.addEventListener('click', ()=> {
    playchoices.classList.remove('d-block')
    playchoices.classList.add('d-none')
    content2.classList.remove('d-none')
    content2.classList.add('d-block')
})

choice.addEventListener('click', ()=> {
    playchoices.classList.remove('d-block')
    playchoices.classList.add('d-none')
    content4.classList.remove('d-none')
    content4.classList.add('d-block')
})

music.addEventListener('click', ()=> {
    playchoices.classList.remove('d-block')
    playchoices.classList.add('d-none')
    content6.classList.remove('d-none')
    content6.classList.add('d-block')
})

 
 /*Once Question/Content display make the answer clickable. */        
 // Make an array of objects 
 // Each object is going to be different emotions
 
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
    image: ["/image/angry1.jpg", "/image/angry2.jpg", "/image/angry3.jpg", "/image/angry4.jpg", "/image/angry5.jpg"],
    // avatar: image,
    quote: 'You are a warrior!!'  
 
},

{
    id: 2,
    emotion: 'Empowerment',
    image: ["/image/empowerment1.png", "/image/empowerment2.png", "/image/empowerment3.png", "/image/empowerment4.png", "/image/empowerment5.png"],
    //  avatar: image,
    quote: 'You are a warrior!!'
},

{
    
    id: 3,
    emotion: 'Happy',
    image: ["/image/happy1.jpg", "/image/happy2.jpg", "/image/happy3.jpg", "/image/happy4.jpg", "/image/happy5.png"],
    //     avatar: image,
    quote: 'You are a warrior!!'
},
-
{
     
    id: 4,
    emotion: 'Inspirational',
    image: ["/image/inspirational1.png", "/image/inspirational2.jpg", "/image/inspirational3.jpg", "/image/inspirational4.png", "/image/inspirational5.png"],
    //     avatar: image,
    quote: 'You are a warrior!!'
},

{
    id: 5,
    emotion: 'Life-Lesson',
    image: ["/image/lesson1.jpg", "/image/lesson2.webp", "/image/lesson3.jpeg", "/image/lesson4.webp", "/image/lesson5.jpg"],
    //     avatar: image,
    quote: 'You are a warrior!!'
},
 
{
     
    id: 6,
    emotion: 'Sad',
    image: ["/image/sad1.png", "/image/sad2.jpeg", "/image/sad3.jpeg", "/image/sad4.png", "/image/sad5.png"],
    //     avatar: image,
    quote: 'You are a warrior!!'
 
},

{
 

    id: 7,
    emotion: 'Wisdom',
    image: ["/image/wisdom1.jpeg", "/image/wisdom2.jpg", "/image/wisdom3.png", "/image/wisdom4.jpg",  "/image/wisdom5.jpg"],
    //     avatar: image,
    quote: 'You are a warrior!!'
}
]


//initialize emotion buttons

angryBtn.addEventListener('click', ()=> {
    let angry = document.querySelector(".content3")
    angry.classList.remove("d-none")
    angry.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    // console.log(emotions[0].image[[Math.floor(Math.random() * emotions[0].image.length)]]);
    let image = emotions[0].image[Math.floor(Math.random() * emotions[0].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)
    
}) 

empowermentBtn.addEventListener('click', ()=> {
    let empowerment = document.querySelector(".content3")
    empowerment.classList.remove("d-none")
    empowerment.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[1].image[Math.floor(Math.random() * emotions[1].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)
    
}) 

 
happyBtn.addEventListener('click', ()=> {
    let happy = document.querySelector(".content3")
    happy.classList.remove("d-none")
    happy.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[2].image[Math.floor(Math.random() * emotions[2].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)
    
}) 


inspiredBtn.addEventListener('click', ()=> {
    let inspirational = document.querySelector(".content3")
    inspirational.classList.remove("d-none")
    inspirational.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[3].image[Math.floor(Math.random() * emotions[3].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)
    
}) 

 
life_LessonBtn.addEventListener('click', ()=> {
    let life_Lesson = document.querySelector(".content3")
    life_Lesson.classList.remove("d-none")
    life_Lesson.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[4].image[Math.floor(Math.random() * emotions[4].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)

}) 

sadBtn.addEventListener('click', ()=> {
    let sad = document.querySelector(".content3")
    sad.classList.remove("d-none")
    sad.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[5].image[Math.floor(Math.random() * emotions[5].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)
    
}) 

wisdomBtn.addEventListener('click', ()=> {
    let wisdom = document.querySelector(".content3")
    wisdom.classList.remove("d-none")
    wisdom.classList.add("d-block")
    content2.classList.remove('d-block')
    content2.classList.add('d-none')
    let image = emotions[6].image[Math.floor(Math.random() * emotions[6].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.emotion').appendChild(imgElement)

}) 


quitGame.addEventListener('click', ()=> {
    content3.classList.remove('d-block')
    content3.classList.add('d-none')
    content7.classList.remove('d-none')
    content7.classList.add('d-block')
    introContainer.classList.add('d-none')
 })

restartBtn.addEventListener('click', ()=> {
    content3.classList.remove('d-block')
    content3.classList.add('d-none')
    playchoices.classList.remove('d-none')
    playchoices.classList.add('d-block')
    introContainer.classList.add('d-none')
})

const feelings = [
    {
        id: 1,
        emotion: 'Angry',
        image: ["/image/angry1.jpg", "/image/angry2.jpg", "/image/angry3.jpg", "/image/angry4.jpg", "/image/angry5.jpg"],
        // avatar: image,
        quote: 'You are a warrior!!'  
     
    },
    
    {
        id: 2,
        emotion: 'Empowerment',
        image: ["/image/empowerment1.png", "/image/empowerment2.png", "/image/empowerment3.png", "/image/empowerment4.png", "/image/empowerment5.png"],
        //  avatar: image,
        quote: 'You are a warrior!!'
    },
    
    {
        
        id: 3,
        emotion: 'Happy',
        image: ["/image/happy1.jpg", "/image/happy2.jpg", "/image/happy3.jpg", "/image/happy4.jpg", "/image/happy5.png"],
        //     avatar: image,
        quote: 'You are a warrior!!'
    },
    
    {
         
        id: 4,
        emotion: 'Inspired',
        image: ["/image/inspirational1.png", "/image/inspirational2.jpg", "/image/inspirational3.jpg", "/image/inspirational4.png", "/image/inspirational5.png"],
        //     avatar: image,
        quote: 'You are a warrior!!'
    },
    
    {
        id: 5,
        emotion: 'Life-Lesson',
        image: ["/image/lesson1.jpg", "/image/lesson2.webp", "/image/lesson3.jpeg", "/image/lesson4.webp", "/image/lesson5.jpg"],
        //     avatar: image,
        quote: 'You are a warrior!!'
    },
     
    {
         
        id: 6,
        emotion: 'Sad',
        image: ["/image/sad1.png", "/image/sad2.jpeg", "/image/sad3.jpeg", "/image/sad4.png", "/image/sad5.png"],
        //     avatar: image,
        quote: 'You are a warrior!!'
     
    },
    
    {
        id: 7,
        emotion: 'Wise',
        image: ["/image/wisdom1.jpeg", "/image/wisdom2.jpg", "/image/wisdom3.png", "/image/wisdom4.jpg",  "/image/wisdom5.jpg"],
        //     avatar: image,
        quote: 'You are a warrior!!'  
    }
]

feelingAngry.addEventListener('click', ()=> {
    let angry = document.querySelector(".content5")
    angry.classList.remove("d-none")
    angry.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    // console.log(emotions[0].image[[Math.floor(Math.random() * emotions[0].image.length)]]);
    let image = feelings[0].image[Math.floor(Math.random() *feelings[0].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)

}), 



feelingEmpowered.addEventListener('click', ()=> {
    let empowerment = document.querySelector(".content5")
    empowerment.classList.remove("d-none")
    empowerment.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[1].image[Math.floor(Math.random() * feelings[1].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)
    
}), 
// console.log(feelings[1].image[[Math.floor(Math.random() * feelings[1].image.length)]]);


feelingHappy.addEventListener('click', ()=> {
    let happy = document.querySelector(".content5")
    happy.classList.remove("d-none")
    happy.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[2].image[Math.floor(Math.random() * feelings[2].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)

}), 

feelingInspired.addEventListener('click', ()=> {
    let inspirational = document.querySelector(".content5")
    inspirational.classList.remove("d-none")
    inspirational.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[3].image[Math.floor(Math.random() * feelings[3].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)

}) 


feelingLife_Lesson.addEventListener('click', ()=> {
    let life_Lesson = document.querySelector(".content5")
    life_Lesson.classList.remove("d-none")
    life_Lesson.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[4].image[Math.floor(Math.random() * feelings[4].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)

}), 

feelingSad.addEventListener('click', ()=> {
    let sad = document.querySelector(".content5")
    sad.classList.remove("d-none")
    sad.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[5].image[Math.floor(Math.random() * feelings[5].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)
// console.log(feelingSad);
}), 

feelingWise.addEventListener('click', ()=> {
    let wisdom = document.querySelector(".content5")
    wisdom.classList.remove("d-none")
    wisdom.classList.add("d-block")
    content4.classList.remove('d-block')
    content4.classList.add('d-none')
    let image = feelings[6].image[Math.floor(Math.random() * feelings[6].image.length)]
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src', image)
    document.querySelector('.feeling').appendChild(imgElement)

}) 


quit.addEventListener('click', ()=> {
    content5.classList.remove('d-block')
    content5.classList.add('d-none')
    content7.classList.remove('d-none')
    content7.classList.add('d-block')
    introContainer.classList.add('d-none')
 })

continueBtn.addEventListener('click', ()=> {
    content5.classList.remove('d-block')
    content5.classList.add('d-none')
    playchoices.classList.remove('d-none')
    playchoices.classList.add('d-block')
    introContainer.classList.add('d-none')
})


quit2.addEventListener('click', ()=> {
    content6.classList.remove('d-block')
    content6.classList.add('d-none')
    content7.classList.remove('d-none')
    content7.classList.add('d-block')
    introContainer.classList.add('d-none')
 })

continue2.addEventListener('click', ()=> {
    content6.classList.remove('d-block')
    content6.classList.add('d-none')
    playchoices.classList.remove('d-none')
    playchoices.classList.add('d-block')
    introContainer.classList.add('d-none')
})

