import config from "../../config/config";
import { Client,  ID , Databases,Storage , Query, TablesDB} from "appwrite";
export class Service{
client = new Client();
databases;
bucket;
constructor(){
      this.client
    .setEndpoint(config.appwriteUrl)
    .setProject(config.appwriteProjectId);
    this.databases = new TablesDB(this.client);
    this.bucket = new Storage(this.client);
}

async createRow({title,userid,content,status,featuredImage}){
try {
    return await this.databases.createRow(
        config.appwriteDatabaseId,config.appwriteTableId,
        ID.unique(),
        {
            title,
            content,
            featuredImage,
            status,
            userid,
        }
    )
} catch (error) {
    console.log("create row error" , error);
    
}
}
async updateRow(slug,{title,content,status,featuredImage}){
try {
    return await this.databases.updateRow(
        config.appwriteDatabaseId,config.appwriteTableId,
        slug,
        {
            title,
            content,
            featuredImage,
            status,

        }
    )
} catch (error) {
console.log("update row error " , error);

}
}
async deleteRow(slug){
try {
    return await this.databases.deleteRow(
        config.appwriteDatabaseId,config.appwriteTableId,
        slug,
    )
} catch (error) {
    console.log("delete Row error" , error);
    
}
}
async getRow(slug){
    try {
        return await this.databases.getRow(
        config.appwriteDatabaseId,config.appwriteTableId,
        slug,
        )
    } catch (error) {
        console.log("get Row error" , error);
        return false;
    }
}
async getRows(queries = [Query.equal("status",true)]){
try {
    return await this.databases.listRows(
    config.appwriteDatabaseId,config.appwriteTableId,
    queries

    )
} catch (error) {
    console.log("list Rows error" , error);
    return null;
}
}


// file upload service
async uploadFile(file){
try {
    return await this.bucket.createFile(
        config.appwriteBucketId,ID.unique(),
       file,
    )
} catch (error) {
    console.log("file uplaod error" , error);
}
}

async deleteFile(fileId){
try {
    return await this.bucket.deleteFile(
        config.appwriteBucketId,
       fileId,
    )
} catch (error) {
    console.log("file delete error" , error);
}
}
getFilePreview(fileId){
return this.bucket.getFilePreview(
   config.appwriteBucketId,
   fileId,

)
}
}

const service = new Service();
export default service;