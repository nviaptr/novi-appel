'use strict'

class AppleTree {
    // constructor
    constructor(tree_age,tree_height,treeMatrueAge,treeHealthStatus,treeLimitAge,treeStopAge) {
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this.harvested = '';
        this._healthStatus = treeHealthStatus;
        this._MatrueAge = treeMatrueAge;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // getter
    get name() {
        return this._name;
    }

    get age() {
        return this._age; 
    }

    get height() {
        this._height;
    }

    get fruits() {
        return this._fruits;
    }

    get healthStatus() {
        return this._healthStatus;
    }

    get harvested() {
        return this._harvested;
    }

    get matureAge() {
        return this._matureAge;
    }

    get limitAge() {
        return this._limitAge;
    }

    // setter
    set age(value) {
        this._age = value;
    }

    // grow
    grow() {
        let addingHeight = 0;
    }

    

    // produce some fruits
    produceFruits() {
        /* 
          * jika pohon ini sudah mencapai umur yang matang (mature) atau lebih besar dari umur matangnya, maka pohon akan berbuah 
          * buat kelas buah di luar kelas pohon
          * hasil buah akan disimpan di dalam seperti fruit
        */
       
    }
    
    // get some fruit
    harvest() {
        /*
         * menentukan jumlah seluruh buah
        */
    }
}