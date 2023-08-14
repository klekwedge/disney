/* eslint-disable class-methods-use-this */
import { makeAutoObservable, runInAction } from "mobx";
import { queryAllCharacers } from "../query";
import { fetchAllCharacters } from "../services/DisneyApi";
import ICharacter from "../types/character";

class CharactersStore{
    characters:ICharacter[] = [];

    isLoading = false;

    constructor() {
        makeAutoObservable(this)
    }

    getAllCharacters = async (page: number) => {
        this.isLoading = true
        const res = await fetchAllCharacters(queryAllCharacers(page, 50))

        runInAction(() => {
            this.characters = res;
            this.isLoading = false
        })
    }
}


export default new CharactersStore();