var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

const Game = {
    data() {
        return {
        playerName: '',
        name: false,
        choice: false,
        yes: false,
        gameStart: false,

       

    }
    methods: {
       
        

        }

        computed: {




        }
       





    }

}
   

/** Checks if the player missed the jump */
/* var checkLoss = setInterval(function() {
    /** Checks the character position compared to the rope position and returns an integer */
    /* let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let ropeLeft = parseInt(window.getComputedStyle(rope).getPropertyValue("left"));
    /** Checks if the rope is in the space of the character 
    position and if the character jumped high enough */
    /* if(ropeLeft<20 && ropeLeft>-20 && characterTop>=130){
        /** If character and rope meet end game */
        /* rope.style.animation = "none";
        /** Displays Game Stats */
        /* alert("Game Over. score: "+Math.floor(counter/100));
        /** Sets the counter to zero */
        /* counter=0;
        /** Keeps the rope moving if no miss */
        /* rope.style.animation = "rope 1s infinite linear";
    }else{
        /** Keeps the counter going */
        /* counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
/** Listens every 10ms for a miss */    
// }, 10); 

const app = Vue.createApp(Game).mount('#app');








/** Vanilla JS because it's what I know a little */
/** Variables */

/* var character = document.getElementById("character");
var rope = document.getElementById("rope");
var counter=0;

/**  Character jumping function */

/* function jump(){
    /** Allows the player to jump once */
    /* if(character.classList == "animate"){return}
    character.classList.add("animate");
    /** Allows to continue to keep clicking and jumping */
    /* setTimeout(function(){
        character.classList.remove("animate");
    /** 300ms the duration of the animation */
    /*},300);
}
/** Checks if the player missed the jump */
/* var checkLoss = setInterval(function() {
    /** Checks the character position compared to the rope position and returns an integer */
    /* let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let ropeLeft = parseInt(window.getComputedStyle(rope).getPropertyValue("left"));
    /** Checks if the rope is in the space of the character 
    position and if the character jumped high enough */
    /* if(ropeLeft<20 && ropeLeft>-20 && characterTop>=130){
        /** If character and rope meet end game */
        /* rope.style.animation = "none";
        /** Displays Game Stats */
        /* alert("Game Over. score: "+Math.floor(counter/100));
        /** Sets the counter to zero */
        /* counter=0;
        /** Keeps the rope moving if no miss */
        /* rope.style.animation = "rope 1s infinite linear";
    }else{
        /** Keeps the counter going */
        /* counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
/** Listens every 10ms for a miss */    
// }, 10); 

//const app = Vue.createApp(ddGame).mount('#app');
