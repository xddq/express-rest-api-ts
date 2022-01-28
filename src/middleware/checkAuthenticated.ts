/**
*
* Author: Pierre Dahmani
* Created: 29.01.2022
*
* Description: Basic example middleware which simulates authentication.
* Will authenticate based on a boolean value inside the header.
*/
import {RequestHandler} from 'express';

const authenticate: RequestHandler = (req, res, next) => {
    const authenticated = req.header("authenticated")

    if (authenticated === "true") {
        next()
    }

    res.status(403).json({msg: "Unauthorized."})
}

export default authenticate
