import { Ui } from "./ui.module.js";

export class Details{

    constructor(id){
     
        document.getElementById('btnClose').addEventListener('click',()=>{
          document.getElementById('details').classList.add("d-none");
          document.getElementById('games').classList.remove("d-none");
        }
       
    )
    this.loading=document.querySelector(".loading")
    this.getDetails(id);
    }
    async getDetails(id){
this.loading.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '86ec79e075msheceb7df5254d877p1adf30jsn58313cbe1fcd',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        const api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options);
        const response=await api.json();
        console.log(response)
        new Ui().displayDetails(response)
    }
}
