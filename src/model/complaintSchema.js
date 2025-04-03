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
        required: true 
    }, // Example: "Road", "Electricity"
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
    rejectionReason: { type: String }, // If rejected, store reason
}, { timestamps: true });

const Complaint = mongoose.model("Complaint", ComplaintSchema);
export default Complaint;
