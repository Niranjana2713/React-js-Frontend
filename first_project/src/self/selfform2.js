let Store=[
    {
     firstname:"Subash",
     usernames:"Maha",
     passwords:"subu1234",
     emails:"subash2713@gmail.com"
    },
    {
        firstname:"Niranjana",
        usernames:"Nivi",
        passwords:"nivi1234",
        emails:"niranjana2713@gmail.com"
       },

       {
        firstname:"nivisubash",
        usernames:"nisu",
        passwords:"nisu1234",
        emails:"nivi2713@gmail.com"
       }

]

export let Thaillu=(obj)=>
{
    Store.push(obj)
}

export let Viewlist =()=>
{
    return Store;
}

export const Remove=(index)=>
{
   Store=Store.filter(
    (data,pos)=>{
        return pos!==index;
    }
   )
   return Store;
}

export let Uppdate =(red)=>
{
 let usse = Store.filter((data,index)=>
 {
   return index.Store === red;
 })
return usse[0];

}

export var Boxs =(data,pos)=>
{
    Store[pos]=data;
}

