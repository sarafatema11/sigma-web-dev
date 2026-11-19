console.log("My Answer EX: 13")

function createCard(title, cName, views, monthsold, duration, thumbnail) {

    let card = document.createElement("div");
    card.className = "card";

    let thumb = document.createElement("div");
    thumb.className = "thumbnail";

    let img = document.createElement("img");
    img.src = thumbnail;

    let time = document.createElement("span");
    time.className = "duration";
    time.innerText = duration;

    thumb.append(img, time);

    let details = document.createElement("div");
    details.className = "details";

    let heading = document.createElement("h3");
    heading.innerText = title;

    let channel = document.createElement("p");
    channel.innerText = cName;

    let viewText = views >= 1000000
        ? (views / 1000000).toFixed(1) + "M views"
        : views >= 1000
            ? (views / 1000).toFixed(1) + "K views"
            : views + " views";

    let info = document.createElement("p");
    info.innerText = viewText + " • " + monthsold + " months ago";

    details.append(heading, channel, info);

    card.append(thumb, details);

    document.querySelector(".container").append(card);
}


// Multiple video data
let videos = [
    {
        title: "Introduction to Backend | Sigma Web Dev",
        cName: "CodeWithHarry",
        views: 560000,
        monthsold: 7,
        duration: "31:22",
        thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
    },
    {
        title: "HTML Complete Course",
        cName: "Apna college",
        views: 1200000,
        monthsold: 4,
        duration: "25:40",
        thumbnail: "https://i.ytimg.com/vi/HcOc7P5BMi4/hqdefault.jpg"
    },
    {
        title: "JavaScript Tutorial",
        cName: "CodeWithHarry",
        views: 850000,
        monthsold: 2,
        duration: "42:15",
        thumbnail: "https://i.ytimg.com/vi/ER9SspLe4Hg/hqdefault.jpg"
    },
    {
        title: "Learn Complete Figma in 3 hours | Full Course For Beginers",
        cName: "Saurabh Saini",
        views: 46000,
        monthsold: 1,
        duration: "3:09:07",
        thumbnail: "https://img.youtube.com/vi/WqWldGvZdNw/hqdefault.jpg"
    }

];

// Random video select
let randomIndex = Math.floor(Math.random() * videos.length);

let video = videos[randomIndex];

// Generate card
createCard(
    video.title,
    video.cName,
    video.views,
    video.monthsold,
    video.duration,
    video.thumbnail
);


