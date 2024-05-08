class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log("something went wrong at repository layer!");
            throw error;
        }
    }

    async get(id){
        try {
            const response  = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log("something went wrong at repository layer!");
            throw error;
        }
    }

    async delete(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log("something went wrong at repository layer!");
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.findByIdAndUpdate(id,data,{new:true});
        } catch (error) {
            console.log("something went wrong at repository layer!");
            throw error;
        }
    }
}

module.exports = CrudRepository;