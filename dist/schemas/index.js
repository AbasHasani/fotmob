"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const load_files_1 = require("@graphql-tools/load-files");
const merge_1 = require("@graphql-tools/merge");
const path_1 = __importDefault(require("path"));
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, "./"), {
    extensions: ["graphql"],
});
exports.typeDefs = (0, merge_1.mergeTypeDefs)(typesArray);