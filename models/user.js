const mongoose = require('mongoose')
const crypto = require('crypto')
const uuidv1 = require('uuid/v1')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: true;,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: 32
    },
    hashed_password: {
        type: String,
        required: true
    },
    about: {
        type: String,
        trim: true,
    },
    salt: {
        type: String,
        role: {
            type: Numer,
            default: 0
        },
        history: {
            type: Array,
            default:[]
        }

    }


}, { timestamps:true });