let Data ="secert data";

class User {
    
    constructor(name , email){
        this.name = name;
        this.email = email;
    }

    view_data(){
        console.log("viewing data --> " ,Data);
    }

}

class Admin extends User{
    
    constructor(name , email){
        super(name , email)
    }

    editdata () {
        Data="new data";
        console.log("modified data -->" ,Data);
        
    }
}


let studnet1 = new User("bhavesh" , "b@gmail.com");
let studnet2 = new User("hitesh" , "h@gmail.com");

let Teacher = new User("doe" , "doe@gmail.com");

let admin = new Admin("admin" , "admin@123");
