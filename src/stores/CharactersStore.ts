/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import { queryAllCharacers } from "../query";
import { fetchAllCharacters } from "../services/DisneyApi";

class CharactersStore{
    characters = [];

    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    getAllCharacters = async () => {

        this.isLoading = true
        const res = await fetchAllCharacters(queryAllCharacers(1, 50))

        runInAction(() => {
            this.characters = res;
            this.isLoading = false
        })
    }
}


export default new CharactersStore();