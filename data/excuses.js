"use strict";
const excuseList = [
    {
        id: 1,
        excuse: "I have to change my oil."
    },
    {
        id: 2,
        excuse: "I'm allergic to your kind."
    },
    {
        id: 3,
        excuse: "I can't be exposed to sunlight."
    },
    {
        id: 4,
        excuse: "you're better off without me."
    },
    {
        id: 5,
        excuse: "we were on a BREAK."
    },
    {
        id: 6,
        excuse: "I'm applying for internships."
    },
    {
        id: 7,
        excuse: "I need to focus on me right now."
    },
    {
        id: 8,
        excuse: "I'm going to a hackathon."
    },
    {
        id: 9,
        excuse: "I don't share oxygen very well."
    },
    {
        id: 10,
        excuse: "I hear voices when I'm with you."
    },
    {
        id: 12,
        excuse: "it's laundry day"
    },
    {
        id: 13,
        excuse: "I'm going to be sick that day and time."
    },
    {
        id: 14,
        excuse: "you drink Pepsi and I'm more of a Coke person."
    },
    {
        id: 15,
        excuse: "you haven't met my mom yet."
    },
    {
        id: 16,
        excuse: "I don't have clean underwear."
    },
    {
        id: 17,
        excuse: "I have to cook the food in my fridge before it goes bad (again)."
    },
    {
        id: 18,
        excuse: "I'm having a bad hair day."
    },
    {
        id: 19,
        excuse: "my ex downgraded, so it's a me day."
    },
    {
        id: 20,
        excuse: "I can't eat in front of people."
    },
    {
        id: 21,
        excuse: "I haven't gone to the gym in the last month so I should try to go today."
    },
    {
        id: 22,
        excuse: "I was actually smiling at your friend."
    },
    {
        id: 23,
        excuse: "I have to clean behind my fridge."
    },
    {
        id: 24,
        excuse: "I just remembered something awkward I did and now I'm sad."
    },
    {
        id: 25,
        excuse: "my mom said no."
    },
    {
        id: 26,
        excuse: "I don't share food."
    },
    {
        id: 27,
        excuse: "I can't pull myself off the couch."
    },
    {
        id: 28,
        excuse: "I can't even."
    },
    {
        id: 29,
        excuse: "I am not emotionally prepared for life."
    },
    {
        id: 30,
        excuse: "there's not enough time until Christmas."
    },
    {
        id: 31,
        excuse: "you're not Ryan Smith."
    },
    {
        id: 32,
        excuse: "I'm moving to the Himalayas to become closer to Jesus."
    },
    {
        id: 33,
        excuse: "my grandma has fallen and she can't get up."
    },
    {
        id: 34,
        excuse: "I stepped on a George Foreman grill."
    },
    {
        id: 35,
        excuse: "I'm currently in the middle of creating MegaDesk."
    },
    {
        id: 36,
        excuse: "I'm having a quarter life crisis."
    },
    {
        id: 37,
        excuse: "I'm starting the 12th season of Parks and Recreation."
    },
    {
        id: 38,
        excuse: "I'm 20 tabs deep into Buzzfeed articles and there's no going back until I've read them all."
    },
    {
        id: 39,
        excuse: "I have an 8am I'm going to bed now."
    },
    {
        id: 40,
        excuse: "I have to reorganize my sock drawers."
    },
    {
        id: 41,
        excuse: "I have to watch my 7 siblings."
    },
    {
        id: 42,
        excuse: "I have to go take care of my pet llama."
    },
    {
        id: 43,
        excuse: "the voices in my head are saying not today."
    },
    {
        id: 44,
        excuse: "I need to work on my needlepoint."
    }
];

let exportedMethods = {
    getAllExcuses: () => { return Promise.resolve(excuseList.slice(0)); },
    getExcuse: (id) => {
        if (id === undefined) return Promise.reject("No id provided");

        let excuse = excuseList.filter(x => x.id == id).shift();
        if (!excuse) return Promise.reject("No excuse found")

        return Promise.resolve(excuse);
    },
    getRandomExcuse: () => {
      let randomID = Math.floor((Math.random() * excuseList.length) + 1);
      let excuse = excuseList.filter(x => x.id == randomID).shift();
      if (!excuse) throw "Error finding random excuse";

      return excuse['excuse'];
    }
}

module.exports = exportedMethods;
