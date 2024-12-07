import { Client, Databases, ID,Account,Storage } from "appwrite";
import conf from "../../EnvVariables/Env_Variable";

class Services{
    constructor(){
        this.client=new Client()
        .setEndpoint(conf.AppwriteUrl)
        .setProject(conf.Projectid);


    this.account = new Account(this.client);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
    }

    async Menu(){
        try {
           const resp= await this.database.listDocuments(
            conf.Databaseid,
            conf.Collectionid
           )
           if(resp){
            // console.log('resp:',resp.documents);
            return resp.documents;
           }else{
            console.log('error',error);
           }
        } catch (error) {
            console.log("error::",error);
        }
    }
    // create reservation 
    async CreateReservation(data){
        try {
            const resp=this.database.createDocument(
                conf.Databaseid,
                conf.Reservationid,
                ID.unique(),
                {...data}
            )
            if(resp){
                return resp;
            }else{
                console.log('Reservation error::',resp)
            }
        } catch (error) {
            console.log('Reservation error::',error);
        }
    }
    // get reservation data
    async reservationdata(){
        try {
            const resp=this.database.listDocuments(
                conf.Databaseid,
                conf.Collectionid
            )
            if(resp){
                return resp;
            }
        } catch (error) {
            console.log('reservation error::',error);
        }
    }

    // signup work
    async Signup(userid,email,password){
        try {
            const resp=this.account.create(userid,email,password);
            if(resp){
                return resp;
            }
        } catch (error) {
            console.log('signup error :: ',error);
        }
    }
    // login 
    async Login(email,password){
        try {
            const resp=this.account.createEmailPasswordSession(email,password);
            if(resp){
                return resp;
            }
        } catch (error) {
            console.log('signup error :: ',error); 
        }
    }
    
    // sessions 
    async currentsession(){
        try {
            const resp=this.account.getSession('current');
            if(resp){
                return resp;
            }
        } catch (error) {
            console.log('session error::',error);
        }
    }
    // delete session 
    async Logout(){
        try {
            const resp=this.account.deleteSession("current");
            if(resp){
                return resp;
            }
        } catch (error) {
            console.log('error::',error);
        }
    }
    // creation of data for contact us page 
    async createContact(data) {
        try {
            const resp = await this.database.createDocument(
                conf.Databaseid,
                conf.ContactusCollectionid,
                ID.unique(),
                {
                    Name:data.name,
                    email:data.email,
                    subject:data.subject,
                    message:data.message,
                } 
            );
            return resp; // Return the response directly if successful
        } catch (error) {
            console.error("Request failed:", error.message);
            throw new Error("Failed to create contact document."); // Throw an error for the caller to handle
        }
    }
    // create document for cart
    async cartdocument(val){
        try {
            const data=this.database.createDocument(
                conf.Databaseid,
                conf.CartCollectionid,
                ID.unique(),
                {...val}
            )
            if(data){
                return data;
            }
        } catch (error) {
            console.log("Cart data E rror::",error);
        }
    }

    // list cart data 
    async listcartdata(){
        try {
            const data=this.database.listDocuments(
                conf.Databaseid,
                conf.CartCollectionid
            )
            if(data){
                return data;
            }
        } catch (error) {
           console.log("list data cart error ::",error); 
        }
    }
    // delete cart data
    async deletecartdata(id){
        try {
            const data=this.database.deleteDocument(
                conf.Databaseid,
                conf.CartCollectionid,
                id
            )
            if(data){
                return data;
            }
        } catch (error) {
            console.log("error ::",error);
        }
    }
    
}
const Appwriteservice=new Services();
export default Appwriteservice;