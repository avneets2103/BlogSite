import conf from "../../conf";
import { Client, Databases, Query, ID } from "appwrite";

export class PostsService{
    client = new Client();
    databases;

    constructor (){
        this.client.setEndpoint(conf.url).setProject(conf.projectId);
        this.databases = new Databases(this.client);
    }

    async createPost(post = {Title, Content, ImageId, Status, UserName}){
        try{
            console.log(post)
            return await this.databases.createDocument(
                conf.DBid,
                conf.collectionId,
                ID.unique(),
                {
                    Title: post.Title, 
                    Content: post.Content, 
                    ImageId: post.ImageId, 
                    Status: post.Status, 
                    UserName: post.UserName 
                }
            )
        }
        catch(error){
            console.log("Error in post creation");
        }
        return null;
    }

    async updatePost(documentId, post = {Title, Content, ImageId, Status, UserName}){
        try{
            return await this.databases.updateDocument(
                conf.DBid,
                conf.collectionId,
                documentId,
                post
            )
        } catch (error){
            console.log("Error in Update Post");
        }
        return null;
    }

    async deletePost(documentId){
        try{
            return await this.databases.deleteDocument(
                conf.DBid, 
                conf.collectionId, 
                documentId
            )
        } catch(error){
            console.log("Deletion of post error");
            return false;
        }
    }

    async getPost(documentId){
        try{
            return await this.databases.getDocument(
                conf.DBid,
                conf.collectionId,
                documentId
            )
        } catch(error){
            console.log("get post error");
            return false;
        }
    }

    async getPosts(queries = [Query.equal("Status", true)]){
        try{
            return await this.databases.listDocuments(
                conf.DBid, 
                conf.collectionId,
                queries
            )
        } catch (error){
            console.log("Error in getting all posts");
            return false;
        }
    }
}

const postsService = new PostsService();
export default postsService;