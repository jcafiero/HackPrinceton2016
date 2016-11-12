const excuseList = [
/*
I have to change my oil.
I'm allergic to your kind.
I can't be exposed to sunlight.
you're better off without me.
we were on a break.
I'm applying for internships.
I need to focus on me right now.
I'm going to a hackathon.
I don't share oxygen well.
I hear voices when I'm with you.
it's laundry day.
I'm going to be sick that day and time.
you drink Pepsi and I'm a Coke person.
you haven't met my mom yet.
I don't have clean underwear.
I have to cook the food in my fridge before it goes bad (again).
I'm having a bad hair day.
my ex downgraded, so it's a me day.
I can't eat in front of people.
I haven't gone to the gym in the last month so I should try to go today.
I was actually smiling at your friend.
I don't share food.
I have to clean behind my fridge.
I just remembered something awkward I did and now I'm sad.
I can't pull myself off the couch.
I can't even.
I am not emotionally prepared for life.
There's not enough time until Christmas.
I'm moving to the Himalayas to become closer to Jesus.
My grandma has fallen and she can't get up.
I stepped on a George Foreman grill.
I'm currently in the middle of creating MegaDesk.
I'm starting the 12the season of Parks and Recreation.
I'm having a quarter life crisis.
I'm 20 tabs deep into Buzzfeed articles and there's no going back until I've read them all.


*/


    {
        id: 1,
        excuse: "//",
    },
    {
        id: 2,
        excuse: "//"
    },
    {
        id: 3,
        excuse: "//"
    },
    {
        id: 4,
        excuse: "//"
    },
    {
        id: 5,
        excuse: "//"
    },
    {
        id: 6,
        excuse: "//"
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
      //todo generate random number
      let randomID = 4;
      return getExcuse(randomID);
    }
}

module.exports = exportedMethods;
