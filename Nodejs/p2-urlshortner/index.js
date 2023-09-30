const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.listen(8001, ()=>console.log("running on 8001..."))