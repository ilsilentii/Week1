var container = { }; // main object

// add 100 sub-object values
for(i = 0; i < 100; ++i) {
 container['prop'+i ]  /*property name or key of choice*/
         = { 'a':'something',
             'b':'somethingelse',
             'c': 2 * i
           };
}

console.log(container);