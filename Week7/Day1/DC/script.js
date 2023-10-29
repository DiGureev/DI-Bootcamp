// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.



// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”

class Video{
  constructor(title, uploader, time){
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch(){
    console.log(`${this.uploader} watched all ${this.time} sec of ${this.title}`)
  }
}

// Instantiate a new Video instance and call the watch() method.

const video = new Video('Harry Potter', 'Diana', 261)
// video.watch()

const infoArr = [{title: 'Harry Potter', uploader: 'Diana', time: 261}, 
{title: 'Gosip Girl', uploader: 'Danny', time:  1380},
{title: 'Charley Angels', uploader: 'Max', time: 300},
{title: 'Suits', uploader: 'Alex', time: 1798},
{title: 'Harry Potter 5', uploader: 'Diana', time: 301},]

// infoArr.forEach(item) 

const objVideoInst = infoArr.map(dict => {
  return new Video(dict.title, dict.uploader, dict.time);
})

objVideoInst.forEach(obj => {
  obj.watch()
})

// Instantiate a second Video instance with different values.
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.