const mongoose=require("mongoose")

const {ObjectId}= mongoose.Schema;

const PatientSchema=new mongoose.Schema({
    patient:{
        type: ObjectId,
        ref:"Patients"
    },
    name:{
        type: String,
       trim: true,
       required: true,
       maxlength: 32,
       },
       age:{
           type:Number,
           required: true,
       },
       regist_no:{
        type:Number,
        trim: true,
        required: true,
      
    },

     area:{
        type: String,
        trim: true,
        required: true,
        //maxlength: 2000,
    },
    phone:{
        type:Number,
        trim: true,
        required: true,
        maxlength: 32,
      
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    
    Blood:{
        type:Number,
        required: true,
    },
    pulse:{
        type:Number,
        required: true,
    },
    height:{
        type:Number,
        required: true,
    },
    weight:{
        type:Number,
        required: true,
    },
    BMI:{
        type:Number,
        required: true,
    },
    resp_system:{
        type: String,
        trim: true,
        required: true,
    },
    abdomen:{
        type: String,
        trim: true,
        required: true,
    },
    cardio_vascular_system:{
        type: String,
        trim: true,
        required: true,
    },
    central_nrvs_system:{
        type: String,
        trim: true,
        required: true,
    },
    joints:{
        type: String,
        trim: true,
        required: true,
    },
   
   
    photos:{
        data:Buffer,
        contentType: String,

    }


})

const UserSchema = new mongoose.Schema({
    patients: [PatientSchema],
    name: {
        type: String,
        required: true,
        maxlength:32,
        trim: true,
    },
    last_name: {
      type: String,
      maxlength:32,
      trim: true,
  },
  email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
  },
  
  encry_password: {
      type: String,
      required: true
  },
  salt: String,
  role: {
      type: Number,
      default: 0
  },
 
},
{
  timestamps: true
}
);

userSchema.virtual("password")
    .set(function(password){
        this._password=password;
        this.salt=uuidv1();
        this.encry_password= this.securedPassword(password)
    })
    .get(
        function(){
            this._password; 
        }
    )


userSchema.methods= {

  authentication:function(plan_password){
      return this.securedPassword(plan_password)===this.encry_password;
  },

    securedPassword: function(plan_password){
        if(!plan_password) return "";
        try{
            return crypto.createHmac('sha256',this.salt )
            .update(plan_password)
            .digest('hex');

        }
        catch(error){
            return "";
        }
    }
}
const patients=mongoose.model("PatientSchema", PatientSchema)
const users=mongoose.model("UserSchema",UserSchema)

module.exports ={users,patients};