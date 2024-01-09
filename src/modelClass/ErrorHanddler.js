class ErrorHanddler{

    constructor(err,msg){
        this.err = err,
        this.msg = msg
    }

    errorMesage(){
        return {
            err: this.err,
            message : this.msg
        }
    }

}


module.exports = {ErrorHanddler}