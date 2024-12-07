const conf={
    AppwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    Databaseid:String(import.meta.env.VITE_APPWRITE_DATABASEID),
    Projectid:String(import.meta.env.VITE_APPWRITE_PROJECTID),
    Collectionid:String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    Bucketid:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    Reservationid:String(import.meta.env.VITE_APPWRITE_RESERVATIONCOLLECTIONID),
    ContactusCollectionid:String(import.meta.env.VITE_APPWRITE_CONTACTUSCOLLECTIONID),
    CartCollectionid:String(import.meta.env.VITE_APPWRITE_CARTCOLLECTIONID),
}
export default conf;