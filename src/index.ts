

interface user{
    name:string,
    age:number
}

function sumOfTwoNumbers(user1:user,user2:user){

    return user1.age + user2.age
}

const result = sumOfTwoNumbers({name:"tejas",age:20},{name:"aditya",age:30})

console.log(result)



//------------Pick API AND Partial----------------------------------------------------------------------

// Pick allows you to create a new type by selecting set of properties from existing type 

//Partial makes all properties of type optional,creating a type with all properties but each marked as optional

interface user{
    id:string
    name:string,
    password:string,
    email:string,
}

type updatedDataProps = Pick<user,'name' | 'password'> // here we pick name and password and create new type

type updateDataPropsOptional = Partial<updatedDataProps>

function updateUser(updatedData:updateDataPropsOptional){ // now both properties are optional

    // only update name and password  so here pass only name and password 

}

updateUser({name:"kirat",password:"12345"})




//------------------------------------------- Readonly

interface config{
    endPoint:string,
    apiKey:string
}

const config:Readonly<config> = {  // now we cant reassign value/update obj
  endPoint:"https://api.example.com",
  apiKey:"abcdefgh"
}

config.apiKey= "" // for this line it gives me error ie: Cannot assign to 'apiKey' because it is a read-only property



//-----------------------------------------------------Record and Map---------------------------------------------------

// record helps you to give cleaner types to the complex objects

type userinfo={
    email:string,
    address:string
}

type superuserType = Record<string,userinfo>//here string = tejas,kirat and userinfo={email,address} 

const superUsers:superuserType = {
 
    tejas:{
        email:"",
        address:""
    },
    kirat:{
        email:"",
        address:""
    },
}


// Map
//just another way to set and get values in object both work in typescript and js
//just another way to do key value pairs in js/ts

type user4={
    name:string,
    age:number
}
const user4 = new Map<string,user4>()
user4.set("tejas",{name:"tej",age:12})

user4.get("tejas") //op-{name:"tejas",age:12}
console.log(user4)


//-------------------------------------------------Exclude--

// used when want to exclude a certain value means kind of remove

type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType,'scroll'> // now only include click,mousemove

function handleEvent(event:ExcludeEvent){
    console.log(`Handling Event:${event}`)
}
handleEvent('click')
handleEvent('scroll')//give error bcoz we exclude scroll from ExcludeEvent


//----------------------zod infer : to get zod type

const userinf = z.object({
    name:z.string().min(2)
})

type userinfotype = z.infer<typeof userinf>
