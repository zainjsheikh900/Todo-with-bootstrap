// function foo(){
//     var a = document.getElementById('inp').value
//     console.log(a)

// }


var getul =document.getElementById('ul')

function foo(){
    var a = document.getElementById("inp")
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtnText = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','del(this)')
    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('Edit')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick','editfun(this)')
    deletebtn.setAttribute('class', 'btn btn-danger aaa')
    editbtn.setAttribute('class', 'btn btn-info aaa')
    // console.log(litext);
    // console.log(li);
    
    // console.log(a);
    // document.write(a);
}
function deleteall(){
        getul.innerHTML = ''
}

function del(e){
        e.parentNode.remove()

}
function editfun(e){
        var a = prompt('Enter Edit value',e.parentNode.firstChild.nodeValue )
        e.parentNode.firstChild.nodeValue = a


}






