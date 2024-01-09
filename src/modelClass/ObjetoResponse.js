class RespuestaHanddler{
    #token;

    constructor(susses,msg){
        this.susses = susses;
        this.msg = msg
    }

    set token(token ){
        this.#token =token;
    }
    message(){
        return {
            susses: this.susses,
            message : this.msg
        }
    }
    login(){
        return {
            susses: this.susses,
            message : this.msg,
            token : this.#token
        }
    }

}

module.exports = {RespuestaHanddler}