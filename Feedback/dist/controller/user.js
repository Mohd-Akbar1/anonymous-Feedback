"use strict";
// import { Request, Response } from "express";
// import postgresdb from "../db/db";
// import  {user}  from "../model/model";
// import db from "../db/db";
// import { eq, sql } from "drizzle-orm";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNameById = exports.deleteUser = exports.allUserMessages = exports.userMessage = exports.userController = void 0;
const drizzle_orm_1 = require("drizzle-orm");
const db_1 = __importDefault(require("../db/db"));
const model_1 = require("../model/model");
const userController = async (req, res) => {
    try {
        const name = req.body.name;
        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        }
        console.log(name);
        // Insert new user with default message array
        const nameId = await db_1.default.insert(model_1.user).values({ name }).returning();
        // Generate base API link
        const baseAPI = `https://anon-chat-omega.vercel.app/chat/${nameId[0].id}`;
        // Sanitize the response to avoid circular references
        return res.status(200).json({
            link: baseAPI,
            userId: nameId[0].id,
            name: nameId[0].name,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.userController = userController;
const userMessage = async (req, res) => {
    try {
        const { id } = req.params;
        const newMessage = req.body.message;
        if (!newMessage) {
            return res.status(400).json({ error: "Message is required" });
        }
        // Append new message to the user's message array using raw SQL
        const updatedUser = await db_1.default
            .update(model_1.user)
            .set({
            message: (0, drizzle_orm_1.sql) `array_append(${model_1.user.message}, ${newMessage})`,
        })
            .where((0, drizzle_orm_1.eq)(model_1.user.id, id))
            .returning();
        if (updatedUser.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        // Return success response
        return res.status(200).json({ message: "Message updated successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.userMessage = userMessage;
const allUserMessages = async (req, res) => {
    try {
        const { id } = req.params;
        // Fetch all messages for the given user ID
        const users = await db_1.default.select({ Message: model_1.user.message }).from(model_1.user).where((0, drizzle_orm_1.eq)(model_1.user.id, id));
        if (users.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        // Return sanitized response
        return res.status(200).json({ message: users[0].Message });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.allUserMessages = allUserMessages;
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await db_1.default.delete(model_1.user).where((0, drizzle_orm_1.eq)(model_1.user.id, id)).returning();
        if (deletedUser.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.deleteUser = deleteUser;
const getNameById = async (req, res) => {
    try {
        const { id } = req.params;
        const name = await db_1.default.select({ name: model_1.user.name }).from(model_1.user).where((0, drizzle_orm_1.eq)(model_1.user.id, id));
        if (name.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ name: name[0].name });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
    }
};
exports.getNameById = getNameById;
//# sourceMappingURL=user.js.map