import Benchmark from "benchmark"


import * as wasm from "./index.js"


console.log(wasm.printIt());
function fib(n){
    if(n <= 2) return 1;



    return fib(n-1) + fib(n-2);
}




function runSuite(suite){
    console.log("Running", suite.name)

   let result = []
    suite
        .on("cycle", (event)=>{
            // console.log("done running",event.target.name)
            // let stats = JSON.stringify(event.target.stats)
            // stats = JSON.parse(stats)
            // Reflect.deleteProperty(stats, "sample")
            result.push([event.target.name, String(event.target)])
        })
        .on("complete", function(event){
            // console.log(this)
            console.table(result)
            console.log(this.filter("fastest").map("name") + " won")
            console.log("")
        })
        .run()
}




function addTest(){
    function addJS(a, b){
        return a + b
    }
     
    const addAs = wasm.add

    const addZ = wasm.addZig

    const test = Benchmark.Suite("add");

    test.
       add("AssembyScript", function(){
           addAs(10, 20);
       })
       .add("JS", function(){
           addJS(10, 20)
       })
       .add("Zig", function(){
           addZ(10, 20)
       })
     runSuite(test)


}


// addTest()


console.log("")
function factTest(){
    function factJS(a){
        a == 0 ? 1 : a * factJS(a - 1)
    }
     
    const factAs = wasm.factorial

    const factZ = wasm.factorialZig

    const test = Benchmark.Suite("factorial small : 3");

    test.
       add("AssembyScript", function(){
           factAs(3);
       })
       .add("JS", function(){
           factJS(3)
       })
       .add("Zig", function(){
           factZ(3)
       })
     runSuite(test)


}

factTest()




function factTestL(){
    function factJS(a){
        a == 0 ? 1 : a * factJS(a - 1)
    }
     
    const factAs = wasm.factorial

    const factZ = wasm.factorialZig

    const test = Benchmark.Suite("factorial big : 20");

    test.
       add("AssembyScript", function(){
           factAs(20);
       })
       .add("JS", function(){
           factJS(20)
       })
       .add("Zig", function(){
           factZ(20)
       })
     runSuite(test)


}



factTestL();

function fibtest(){
    function factJS(a){
        a == 0 ? 1 : a * factJS(a - 1)
    }
     
     const factAs = wasm.fibA;

    const factZ = wasm.fib

    const test = Benchmark.Suite("unmemoized fib : 8");
    const test2 = Benchmark.Suite("unmemoized fib: 20")

    test.
       add("AssembyScript", function(){
           factAs(8);
       })
       .add("JS", function(){
           fib(8)
       })
       .add("Zig", function(){
           factZ(8)
       })
     runSuite(test)

     test2.
     add("AssembyScript", function(){
         factAs(20);
     })
     .add("JS", function(){
         fib(20)
     })
     .add("Zig", function(){
         factZ(20)
     })
     runSuite(test2)


}

fibtest()