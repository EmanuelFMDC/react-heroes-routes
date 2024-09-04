
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = ( publisher ) => {

    const validPubishers = ['DC Comics', 'Marvel Comics'];

    if(!validPubishers.includes(publisher)){
        throw new Error(`This ${publisher} is not valid publisher`)
    }

    return heroes.filter(heroes => heroes.publisher === publisher)

}