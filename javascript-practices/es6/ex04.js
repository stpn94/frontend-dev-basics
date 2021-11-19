/**
 * default parameter
 */

const print = function(strs,e='\n'){
    console.log(strs.join(e));
}

print(['Alwyas', 'with','me']);
print(['Alwyas', 'with','me'],' ');