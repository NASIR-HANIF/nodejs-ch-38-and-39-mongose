const mongo = require("mongoose");
const schema = require("./schema");
const userSchema = schema.userSchema;

mongo.connect("mongodb://127.0.0.1:27017/mydatabase38");

const storeData = async(request , response)=>{
    const data = request.body;
   const collection =  userSchema(data); // user sehema ko data deya
   const storeData = await collection.save(); // user schema ne datasave kia 
  // data save honey me time lagaye ga is leye save function ke response ka waite karen gey
  // or is ke perent function ko asnc lagayen gey
   response.json(storeData);

}
//-----------------------------------------------------------
          // find ,,,,,,,,findById ,,,,,,,findOne,,,,,findByQuery({name : n@gmail.com})



// featch all data 
// const featchData = async(request , response)=>{  
//    const data = await userSchema.find();    // user scheema se all data find kia
//    response.json(data);

// }




// onely one data find access first data
const findOne = async(request , response)=>{  
   const data = await userSchema.findOne();    
   response.json(data);

}


// find use query
const findByQuery = async(request , response)=>{  
   const data = await userSchema.findOne({email : "n@gmail.com"});    
   response.json(data);

}




// featch  data by id
const featchDataById = async(request , response)=>{ 
    const id = request.params.id; 
     // single data find karney ke leye params se id ya username ya uniqe information
     //ko request se resive kareren gey id ho ya email ho ya koi or unique value

    const data = await userSchema.findById(id);    // user scheema se 1 id ka data nikala
                                                // params ke zarye get request ho gi
    response.json(data);
 
 }
//--------------------------------------------------------------
            // updateOne,,,,,,findByIdAndUpdate

 // updata one use put request
 // id find karwana hoti hey or pher data de ke update hota hey
 //return me aknowladge miley ga or update count number miley ga
 /*
 const updateDataBtId = async(request , response) =>{
  const id =  request.params.id;
  const data =  request.body;
  const updateRes =  await userSchema.updateOne({"_id" : id},data);
  response.json(updateRes);

 }*/


// single update ho ga sirf id dena hey data dena hey return me update honey wala 
// object miley ga
 const findByIdAndUpdate = async(request , response) =>{
   const id =  request.params.id;
   const data =  request.body;
   const updateRes =  await userSchema.findByIdAndUpdate(id,data);
   response.json(updateRes);
 
  }

//------------------------------------------------------------------------
 //            deleteOne,,,,findByIdandDelete,,,,,,findOneAndDelete


 //find 1 id and delete 1 data is me id dena hoti hey ye id pe moojood
 // data ko delete kar ke accknowladge ki information deta hey
 /*
 const deleteById = async(request , response) =>{
    const id =  request.params.id;
    const deleteRes =  await userSchema.deleteOne({"_id" : id});
    response.json(deleteRes);
  
   }
   */

// ye findByIdandDelete id ko find karey ga data delete karey ga or 
// jo object delete kia ho ga us object ko return bhi karey ga
// {"_id" : id} object deney ki zarorat nahi sirf id dena ho ga

  /* const findByIdandDelete = async(request , response) =>{
      const id =  request.params.id;
      const deleteRes =  await userSchema.findByIdAndDelete(id);
      response.json(deleteRes);
    
     }*/





// findOneAndDelete
     const findOneAndDelete = async(request , response) =>{
      const deleteRes =  await userSchema.findOneAndDelete({email : "y@gmail.com"});
      response.json(deleteRes);
    
     }







//-------------------------------------------
module.exports = {
    storeData :storeData,
   //  featchData : featchData,
   // findOne : findOne,
   findByQuery : findByQuery,
    featchDataById : featchDataById,
   //  updateDataBtId : updateDataBtId,
    findByIdAndUpdate : findByIdAndUpdate,
   //  deleteById : deleteById,
   //  findByIdandDelete : findByIdandDelete
   findOneAndDelete : findOneAndDelete
}

