import config from "../../config/config";
import { Client, Account, ID } from "appwrite";
export class Authservice{
client = new Client;
account;
constructor(){
    this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
}
async createAccount({email,password,userName}) {
    try {
        const userAccount = await this.account.create({
  userId: ID.unique(),
  email,
  password,
  name
});
        if(userAccount){
           return this.login(email,password)
        }
        else{
            return userAccount;
        }
    } catch (error) {
        console.log("user account creation error" , error);
    }
}
async login(email,password){
    try {
        return await this.account.createEmailPasswordSession(email,password);

    } catch (error) {
        console.log(" login error" , error);
    }
}
async getCurrentUser(){
    try {
         return await this.account.get();
         
    } catch (error) {
        console.log("gettig current user error" , error);
    }
    return null;
   
}
async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
       console.log("logout error" , error);
    }
}

}
const authservice = new Authservice;
export default authservice;