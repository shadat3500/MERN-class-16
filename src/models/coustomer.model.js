const mongoose = require("mongoose");

const coustomerSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: [true, "FullName is required"],
            minlength: 3,
            maxlength: 100
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: false,
            default: null
        },
        durationMonths: {
            type: Number,
            required: false,
            default: null
        },
        expiresAt: {
            type: Date,
            required: false,
            default: null
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Coustomer", coustomerSchema);
