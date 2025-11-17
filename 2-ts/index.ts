// import {User} from'./user.ts'
(function(){
    // datatypes
    // let userName:string ='ali';
    // let userAge:number =3;
    // let hambozo:boolean=true;
    // let x:undefined=undefined;
    // let y:object={pname:'shimaa'}
    
    
    
    ////// functions with return datatype
    // function welcome(pname:string):string{
    // return 'ali'
    // }
    // function welcome(pname:string):void{
  
    // }
    // welcome('ali')
    
    
    
    ////// union (multiple datatypes)
    // let hambozo:string|number|boolean ='ali'
    
    
    
    ////// Tuple (single array of different datatypes)
    // let z:[string|number,number,boolean] = [4,30,true] // first item must be (string or number), second item must be number, third item must be boolean .... no more items allowed
    
    
    
    // // any
    // let y:any =9;
	
	
	
    // interface 
    // let user:User={name:'ali',age:30,id:30}
    // let person:User={name:'ahmed',age:40,salary:8000}
    // console.log(user.age)
    
    
    
    ////// array  
    // let user:number[] =[5,6,7,8]
    // let isOld:boolean[]=[true,false]
    // let mixArr:(string|number|boolean)[]=[true,'ali',2]
    
    
    
    // generic 
    function printList<T>(list:T[]):T[]{
    return list
    }
    let result = printList<string|number|boolean>([3,true,'shimaa'])
    let result1 = printList<number>([1,3,4])
    let result2 = printList<boolean>([true,false])
    console.log(result1)
    
    ///// not using generic	
    // function printList1(list:boolean[]):boolean[]{
    // return list
    // }
    // function printList2(list:number[]):number[]{
    // return list
    // }
    // let result1 = printList1([true,false])
    // let result3= printList2([3,4,5])
})()
// (function(){})()

// npm i -g typescript
//tsc index.ts -watch
//break 5:10