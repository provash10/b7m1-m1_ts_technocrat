// node ./src/m3/abstraction3-9.ts
// OOP - abstraction --- idea, implementation

/*
using 1. interface   2. abstract class
*/

//1. interface 
//idea
// interface MediaPlayer{
//     play(): void;
//     pause(): void;
//     stop(): void;
// }

// // implementation
// class MusicPlayer implements MediaPlayer{
//     play(){
//         console.log('Playing music...');
//     }
//     pause(){
//         console.log('Music paused...');
//     }
//     stop(){
//         console.log('Music Stopped');
//     }
// }

// const MezbvaPlayer = new MusicPlayer();
// MezbvaPlayer.play();



//==============================
//abstrct class 10.00 min

abstract class MediaPlayer{
    abstract play():void;
    abstract pause():void;
    abstract stop():void;
}

class MezbaPlayer extends MediaPlayer{
    play(){
        console.log('Playing music...');
    }

     pause(){
        console.log('Music paused...');
    }
    stop(){
        console.log('Music Stopped');
    }
}

const MezbaPlayer1 = new MezbaPlayer();
MezbaPlayer1.play()
