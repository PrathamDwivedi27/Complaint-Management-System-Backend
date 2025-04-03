import ComplaintRepository from "../repository/complaint-repository.js";


class ComplaintService{
    constructor(){
        this.complaintRepository=new ComplaintRepository();
    }

    async createComplaint(data){
        try{
            const complaint = await this.complaintRepository.createComplaint(data);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while creating complaint',error);
            throw error;
        }
    }

    async updateComplaint(id,data){
        try{
            const complaint = await this.complaintRepository.updateComplaint(id,data);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while updating complaint',error);
            throw error;
        }
    }

    async getComplaintById(id){
        try{
            const complaint = await this.complaintRepository.getComplaintById(id);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while finding complaint',error);
            throw error;
        }
    }

    async getComplaint(){
        try{
            const complaint = await this.complaintRepository.getComplaint();
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while fetching complaints',error);
            throw error;
        }
    }

    async deleteComplaint(id){
        try{
            const complaint = await this.complaintRepository.deleteComplaint(id);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while deleting complaint',error);
            throw error;
        }
    }

    async getComplaintByUser(userId){
        try{
            const complaint = await this.complaintRepository.getComplaintByUser(userId);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while creating complaint',error);
            throw error;
        }
    }

    async getComplaintByFilter(filterData){
        try{
            let filter = {};

            if (filterData.userId) filter.userId = filterData.userId;
            if (filterData.location) filter.location = filterData.location;
            if (filterData.category) filter.category = filterData.category;

            const filteredData = await this.complaintRepository.getComplaintByFilter(filterData);
            return filteredData;
        }
        catch(error){
            console.log('Something went wrong in service layer while creating complaint',error);
            throw error;
        }
    }

    async getComplaintByStatus(status){
        try{
            const complaint = await this.complaintRepository.getComplaintByStatus(status);
            return complaint;
        }
        catch(error){
            console.log('Something went wrong in service layer while creating complaint',error);
            throw error;
        }
    }

    
}


export default ComplaintService;