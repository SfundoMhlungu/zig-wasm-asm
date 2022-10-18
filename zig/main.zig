const std = @import("std");




export fn addZig(a: i32, b: i32) i32 {
           return a + b;
}

export fn factorialZig(a: i32) i32{
     

     if(a == 0) {
         
         return 1;
         }
     
 return  a * factorialZig(a - 1);
        

}


export fn fib(n: i32) i32{
    if(n <= 2) return 1;

    return fib(n - 1) + fib(n - 2);
}




 const Suit = struct{
     id: i32,
     arrLen: i32,
     arr: [_]i32,
     pub fn printId(self: Suit) i32{
        return self.id;
     }
   
     pub fn setUpArr(self: Suit, arr: [Suit.arrLen]i32) void{
          _  = arr;
          _ = self;
     }
     pub fn setupLen(self: Suit, len: i32) void {
        _ = len;
        _ =  self;
     }
};

export var mySuite: Suit = Suit{.id = 1};

export fn printIt() i32 {
  return mySuite.printId();
}
// export fn squareArray(arr: []const i32)  i32 {
//      _ = arr;
//    return 1;
// }



//zig build-lib main.zig -target wasm32-freestanding -dynamic -O ReleaseSmall --name debugzig