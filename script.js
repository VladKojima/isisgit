function getObject(){
    let obj = {
        //info: [1,2,3],
        info2:{
            value:'value',
            property:{
                
            }
        },
        property2: {
            value: 'value',
            info: [12,3,21,2]
        }
    };

    return obj;
}

console.log(getObject().info[1]);