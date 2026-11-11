const httpStatus = require("http-status");
const { Coustomer } = require("../models");
const ApiError = require("../utils/ApiError");


const createCoustomer = async (coustomerBody) => {
    if (!coustomerBody.email) {
        throw new ApiError(httpStatus.NOT_FOUND, "Coustomer Email is required!");
    }
    return Coustomer.create({ ...coustomerBody });
};



module.exports = {
    createCoustomer,

};