"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */
// User Model:
const passwordEncrypt = require('../helpers/passwordEncrypt')
const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        set: passwordEncrypt
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

}, {
    collection: 'users',
    timestamps: true
})