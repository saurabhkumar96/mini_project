function game(){
    if(2/2==1){
        throw new Error("something is error", "fix the error")
    }
    else{
        console.log("yes i am the error")
    }
}

game()