import { Client, Account, ID } from "appwrite";
import conf from "../../conf.js";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.url)
            .setProject(conf.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                return this.Login({email, password});
            } else {
               return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async Login({email, password}){
        try{
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error){
            throw error;
        }
    }

    async getCurrUser(){
        try{
            const currUser = await this.account.get();
            return currUser;
        } catch (error){
            console.log("getCurrUser service issue");
        }
        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
            return true;
        } catch (error){
            console.log("logout issue");
        }
        return false;
    }
}

const authService = new AuthService();
export default authService
// authService is an instance of the AuthService class
// we can directly use the functions now. 
// like:
// import authService from ''
// authService.function_name(params)