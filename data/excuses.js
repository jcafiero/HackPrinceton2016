const excuseList = [
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
