// this was just to learn asynch/await and then in the end i also threw in a bit of modules
export default class Chores{
throwRestFoodAway() {

    return new Promise((resolve, reject) => {

        const foodThrownAway = true;

        if (foodThrownAway) {
            setTimeout(() => {
                resolve("You threw the food away!");
            }, 1500);
        } else {
            reject("You Didn't throw it away");
        }
    })
}

emptyDishwasher() {

    return new Promise((resolve, reject) => {
        const emptiedDishwasher = true;
        if (emptiedDishwasher) {
            setTimeout(() => {
                resolve("You emptied the dishwasher!");
            }, 2500);
        } else {
            reject("You didnt empty the dishwasher");
        }
    })

}

cleanRoom() {

    return new Promise((resolve, reject) => {
        let cleanedRoom = false;
        if (cleanedRoom) {
            setTimeout(() => {
                resolve("You cleaned your room!");
            }, 500);
        } else {
            reject("You didnt clean your room!");
        }
    })
}

async doChores() {

    try {
        const throwRestFoodAwayResult = await this.throwRestFoodAway();
        console.log(throwRestFoodAwayResult);

        const emptyDishwasherResult = await this.emptyDishwasher();
        console.log(emptyDishwasherResult);

        const cleanedRoomResult = await this.cleanRoom();
        console.log(cleanedRoomResult);
    } catch (err){
        console.error(err);
    }


}

}