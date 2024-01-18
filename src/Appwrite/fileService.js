import conf from "../../conf";
import { Client, ID, Storage } from "appwrite";

export class FileService{
    client = new Client();
    bucket;

    constructor (){
        this.client.setEndpoint(conf.url).setProject(conf.projectId);
        this.bucket = new Storage(this.client);
    }

    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file
            )
        }catch(error){
            console.log("upload File error");
            return false;
        }
    }

    async deleteFile(fileId){
        try{
            await this.bucket.deleteFile(
                conf.bucketId,
                fileId
            )
            return true;
        }catch(error){
            console.log("File deletion error");
        }
        return false;
    }

    async getFilePreview(fileId){
        return await this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
    }

    async getFileView(fileId){
        try {
            return await this.bucket.getFileView(
                conf.bucketId,
                fileId
            )
        } catch (error) {
            console.log("Error in get File");
            return null;
        }
    }
}

const fileService = new FileService()
export default fileService