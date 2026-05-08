// interface MediaPlayer {
//     play() :void;
//     pause() :void;
//     stop() :void;
// };

// class MusicPlayer implements MediaPlayer {
//     play(): void {
//         console.log("playing music.....");
//     }

//     pause(): void {
//         console.log("Music paused...");
//     }

//     stop(): void {
//         console.log("Music stopped...");
//     }
// }
// const player = new MusicPlayer();

// player.play();
// player.pause();
// player.stop();

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}
class MusicPlayer extends MediaPlayer {

    play(): void {
        console.log("playing music.....");
    }

    pause(): void {
        console.log("Music paused...");
    }

    stop(): void {
        console.log("Music stopped...");
    }
}
const player = new MusicPlayer();



player.play();
player.pause();
player.stop();
