const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const http = require("http").createServer(app);