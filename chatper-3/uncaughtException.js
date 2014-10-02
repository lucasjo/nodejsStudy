process.on('uncaughtException', function(err){
    console.log('예외' + err);
});

setTimeout(function(){
    console.log('이 코드는 실행된다.');
}, 500);

//존재하지 않는 함수 실행
noExistentFunction();

console.log('이 코드는 실행이 되지 않느다');