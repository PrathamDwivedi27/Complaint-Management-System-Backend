import ComplaintService from "../service/complaint-service.js";


const complaintService=new ComplaintService();


const createComplaint=async (req,res)=>{
    try {
       const complaint=await complaintService.createComplaint(req.body);
       return res.status(201).json({
            success:true,
            message:'Complaint created successfully',
            data:complaint,
            error:{}
        }) 
    } catch (error) {
        console.log('Something went wrong in controller layer while creating complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while creating complaint',
            error:error.message
        })
    }
};

const updateComplaint=async (req,res)=>{
    try {
        const {id}=req.params;
        const complaint=await complaintService.updateComplaint(id,req.body);
        if(!complaint){
            return res.status(404).json({
                success:false,
                message:'Complaint not found',
                error:{}
            })
        }
        return res.status(200).json({
            success:true,
            message:'Complaint updated successfully',
            data:complaint,
            error:{}
        })
    } catch (error) {
        console.log('Something went wrong in controller layer while updating complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while updating complaint',
            error:error.message
        })
    }
};

const getComplaintById=async (req,res)=>{
    try {
        const {id}= req.params;
        const data= await complaintService.getComplaintById(id);
        if(!data){
            return res.status(404).json({
                success:false,
                message:'Complaint not found',
                error:{}
            })
        }
        return res.status(200).json({
            success:true,
            message:'Complaint fetched successfully',
            data:data,
            error:{}
        })
    } catch (error) {
        console.log('Something went wrong in controller layer while getting complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while getting complaint',
            error:error.message
        }) 
    }
}

const getComplaint=async (req,res)=>{
    try {
        const data= await complaintService.getComplaint();
        if(!data){
            return res.status(404).json({
                success:false,
                message:'Complaint not found',
                error:{}
            })
        }
        return res.status(200).json({
            success:true,
            message:'Complaint fetched successfully',
            data:data,
            error:{}
        })
    } catch (error) {
        console.log('Something went wrong in controller layer while getting complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while getting complaint',
            error:error.message
        }) 
    }
}

const deleteComplaint=async (req,res)=>{
    try {
        const {id}=req.params;
        const complaint=await complaintService.deleteComplaint(id);
        if(!complaint){
            return res.status(404).json({
                success:false,
                message:'Complaint not found',
                error:{}
            })
        }
        return res.status(200).json({
            success:true,
            message:'Complaint deleted successfully',
            data:complaint,
            error:{}
        })
    } catch (error) {
        console.log('Something went wrong in controller layer while delete complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while delete complaint',
            error:error.message
        })   
    }
}

const getComplaintByUser=async (req,res)=>{
    try {
        const {userId}=req.body;
        const complaints=await complaintService.getComplaintByUser(userId);
        return res.status(200).json({
            success:true,
            message:'Complaint fetched successfully',
            data:complaints,
            error:{}
        })
    } catch (error) {
        console.log('Something went wrong in controller layer while getting complaint',error);
        return res.status(500).json({
            success:false,
            message:'Something went wrong in controller layer while getting complaint',
            error:error.message
        })    
    }
}

const getComplaints = async (req, res) => {
    try {
      const filters = {...req.query};
      console.log(filters);
      const complaints = await complaintService.getComplaintByFilter(filters);
  
      res.status(200).json({
        success: true,
        count: complaints.length,
        data: complaints,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

const getComplaintByStatus=async(req,res)=>{
    try {
        const filters = {...req.query};
        console.log(filters);
        const complaints = await complaintService.getComplaintByFilter(filters);
    
        res.status(200).json({
          success: true,
          count: complaints.length,
          data: complaints,
        });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          success: false,
          message: "Internal Server Error",
        });
      }
}


export {
    createComplaint,
    updateComplaint,
    getComplaintById,
    getComplaint,
    deleteComplaint,
    getComplaintByUser,
    getComplaints,
    getComplaintByStatus


}