export const sendStatus = (res : any, status : any, message: string) => {
    const response = {
        success: false,
        message: ""
    }
    switch (status) {
        case 404:
            response.message = (message) ? message : "Not found.";
            break;
        case 500:
            response.message = (message) ? message : "Server error occurred";
            break;
        case 412:
            response.message = (message) ? message : "Missing expected content";
            break;
        case 409:
            response.message = (message) ? message : "Already exists"
            break;
        case 400:
            response.message = (message) ? message : "Given resource is wrong"
        case 200:
            response.message = (message) ? message : "Succes!";
            response.success = true;
            break;
    }

    return res.status(status).json(response);
}