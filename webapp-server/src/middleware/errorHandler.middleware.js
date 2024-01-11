export const notFound = (req, res, next) => {
    console.log('stayed in notFound => ');
    const error = new Error(`Not Found -- ${req.originalUrl}`);
    res.status(404);
    next(error);
};

export const errorHandler = (err, req, res) => {
    let statusCode = res.statusCode == 200 ? 500 : res.statusCode;
    let message = err.message;
    console.log('handling the message => ', message);

    //This is when invalid mongoDB ObjectId req comes. mongoDb Object id needs to be in uuid format
    if(err.name === 'Cast Error' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = `Resource not found`
    };

    res.status(statusCode).json({ message });
}