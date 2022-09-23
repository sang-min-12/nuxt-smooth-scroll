import {defineStore} from 'pinia'
import {AllProducts} from 'api/types'
import axios from 'axios'

interface ProductState{
items: Record<string, AllProducts>
ids: number[]
}

export const useProductNewState = defineStore({  id:"product",          
        state:():ProductState => ({
            items:{},
            ids:[],
        }),

        getters:{
            list():AllProducts[] {
                return this.ids.map(c=>this.items[c])
            },
            loading():boolean{
                return this.ids.length > 0
            }
        },

        actions:{
            async fetchAll(){
                if(this.loading) return 
                const res = await fetch ("https://api.escuelajs.co/api/v1/products/")
                const data:AllProducts[] = await res.json()
                this.ids = data.map((product)=>{
                    this.items[product.id] = product
                    return product.id
                })
            }
        },
})