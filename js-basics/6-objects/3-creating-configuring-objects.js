var ford = Object.create({
    //Прототип
    calculateDistancePerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: false,
            writable: false, 
            configurable: false
        })
    }
}, {
    //Свойства
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false,
        configurable: false
    },
    model: {
        value: 'focus',
        enumerable: true,
        writable: false,
        configurable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false,
        configurable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true,
        configurable: false
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('получаем возраст')
            return new Date().getFullYear() - this.year
        },
        set: function() {
            console.log('Устанавливаем значение')
        }
    }
})

// получим ключи объекта
for (var key in ford) {
    console.log(key)
    
    if(ford.hasOwnProperty(key)) {
        console.log(key, ford[key])
    }
}
