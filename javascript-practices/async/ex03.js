const ex02 = require('./ex02');
const ex03 = async function(param) {
    try {
        const res = await ex02(param);
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
}

if(require.main == module){
    //test01 : success
    ex03('param-data');

    ex03('param-error');
    console.log('....waits');
} else {
    module.exports = ex03;
}