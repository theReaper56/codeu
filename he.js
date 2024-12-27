ul=document.createElement("ul");
document.body.appendChild(ul);
while(true)
{
    data=prompt("Enter");
    if(data==null||data=="")
        break;

    li=document.createElement("li");
    li.innerHTML=data;
    ul.appendChild(li);
    
    
}