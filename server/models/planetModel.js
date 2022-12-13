const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Schema for planets
const planetSchema = new Schema({
    name: {
        type: String,
    },
    overview: {
        content: {
            type: String,
        },
        source: {
            type: String,
        },
    },
    structure: {
        content: {
            type: String,
        },
        source: {
            type: String,
        },
    },
    geology: {
        content: {
            type: String,
        },
        source: {
            type: String,
        },
    },
    rotation: {
        type: String,
    },
    revolution: {
        type: String,
    },
    radius: {
        type: String,
    },
    temperature: {
        type: String,
    },
    images: {
        planet: {
            type: String,
        },
        internal: {
            type: String,
        },
        geology: {
            type: String,
        },
    },
    color: {
        type: String,
    }
});

module.exports = mongoose.model("Planet", planetSchema);
