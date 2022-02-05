/**
*
* Author: Pierre Dahmani
* Created: 29.01.2022
*
* Description: Basic example middleware which simulates authentication.
* Will authenticate based on a string value inside the header.
*/
import {RequestHandler} from 'express';

const authenticate: RequestHandler = (req, res, next) => {
    const authenticated = req.header("authenticated")

    if (authenticated === "true") {
        return next()
    }

    return res.sendStatus(401);
}

export default authenticate
