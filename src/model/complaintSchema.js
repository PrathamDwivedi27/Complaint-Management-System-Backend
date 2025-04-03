import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true,
        enum: [
            "Road Damage",
            "Water Leakage",
            "Garbage Collection",
            "Street Lights",
            "Traffic Signals",
            "Illegal Construction",
            "Sewage Issues",
            "Noise Pollution",
            "Harassment",
            "Salary Issues",
            "Discrimination",
            "Fraud",
            "Product Defect",
            "Internet & Telecom Issues"
          ], 
    },
    image:{
        type:String,
    },
    location: { 
        type: String, 
        required: true 
    },
    citizen: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", required: true 
    }, // Complaint creator
    officer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Officer" 
    }, // Assigned officer (if approved)
    status: { 
        type: String, 
        enum: ["pending", "approved", "in-progress", "completed", "rejected"], 
        default: "pending" 
    },
    rejectionReason: { 
        type: String ,
        default:null
    }, 
}, { timestamps: true });

const Complaint = mongoose.model("Complaint", ComplaintSchema);
export default Complaint;
