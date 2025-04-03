import mongoose from "mongoose";

const OfficerSchema = new mongoose.Schema(
  {
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    badgeId: { 
        type: String, 
        unique: true, 
        required: true 
    }, // Unique government-issued ID
    category: { 
        type: String, 
        required: true 
    }, // Example: "Road", "Electricity", "Water"
    assignedTasks: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Complaint" 
    }], // Assigned complaints
  },
  { timestamps: true }
);

const Officer = mongoose.model("Officer", OfficerSchema);
export default Officer;
