function code(lang){
  console.log("lang id = "+lang)
  switch(parseInt(lang)){
    case 50 : c_code()
              break

    default:console.log('error')
  }
}

function c_code(){
  editor.setValue(`#include<stdio.h>\n\nint main(){\n\n    printf("hello world"); \n\n    return 0;\n}`)
}