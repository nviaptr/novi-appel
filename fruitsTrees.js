'use strict'

class FruitsTree {
    // constructor
    constructor(tree_age,tree_height,treeMatrueAge,treeHealthStatus,treeLimitAge,treeStopAge) {
        this._age = tree_age;
        this._height = tree_height;
        this._fruits = [];
        this.harvested = '';
        this._healthStatus = treeHealthStatus;
        this._MatrueAge = treeMatrueAge;;
        this._limitAge = treeLimitAge;
        this._stopAge = treeStopAge;
    }

    // getter

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

    get stopAge () {
        return this._stopAge;
    }

    // setter
    set age(value) {
        this._age = value;
    }
    // grow
    grow() {
        this._age++;
        let addingHeight = 0;
        if (this.age < this.limitAge) {
            addingHeight = Math.round (Math.random()*100)/100
            this.height += addingHeight;
        }
    
        if (this._age > this._stopAge) {
            this._healthStatus = false
        };
        return this;
    }

    

    // produce some fruits
    produceFruits() {
        if (this.age >= this._MatrueAge) {
            console.log("berbuah")
        } 

        if (this.age >= this.matureAge) {
            let fruitsTotal = Math.round (Math.random * 100);
            for ( let i = 1 ; i <= fruitsTotal; i++);
            this.fruits.push(i);
        }
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
// class fruits
class Fruits {
    constructor (num) {
        this.quality = setquality(num);
    }
    setQuality(num) {
        if(Math.random() > num) {
            this.quality = 'good'
        } else {
            this.quality = 'bad'
        }
    }
}
