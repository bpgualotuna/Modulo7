import { Invoice } from "../model/Invoice";

export const invoiceData:Invoice={
    id:"001",
    company:{
        ruc:"1792285747001",
        name:"Clear Minds Consultores",
        address:{
            city:"Quito",
            principalStreet:"Av. Amazonas",
            secondaryStreet:"Av. Shyris",
            code:"N-57"
        }
    },
    customer:{
        id:"1725914236",
        name:"Brayan",
        surname:"Gualotuña",
        address:{
            city:"Quito",
            principalStreet:"Av. Amazonas",
            secondaryStreet:"Av. Shyris",
            code:"N-57"
        }
    },
    items:[
        {
            id:100,
            product:{
                id:345,
                name:"Doritos",
                price:1.50,
                description:"Snack de maiz",
                category:{
                    id:1,
                    name:"Snacks"
                }
            },
            quantity:10
        },
        {
            id:101,
            product:{
                id:346,
                name:"Coca Cola",
                price:2.50,
                description:"Bebida gaseosa",
                category:{
                    id:2,
                    name:"Bebidas"
                }
            },
            quantity:50
        },
        {
            id:102,
            product:{   
                id:347,
                name:"Kchitos",
                price:0.50,
                description:"Para cachudos",
                category:{
                    id:1,
                    name:"Snacks"
                }
            },
            quantity:100
        }
    ]
}