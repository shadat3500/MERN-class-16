const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const response = require("../config/response");
const { coustomerService } = require("../services");


const createCoustomer = catchAsync(async (req, res) => {
    const customer = await coustomerService.createCoustomer(req.body);
    res.status(httpStatus.CREATED).json(
        response({
            message: "Customer Created",
            status: "OK",
            statusCode: httpStatus.CREATED,
            data: customer,
        })
    );
});


module.exports = {
    createCoustomer,

};
