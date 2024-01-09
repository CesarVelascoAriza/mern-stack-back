class Producto {
    /**
     * propiedades privadas
     * #name;
     */
    
    #name;

    set name(name){
        this.#name = name    
    }

    get name(){
        return this.#name;
    }
    
}