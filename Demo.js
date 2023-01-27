var x= [];
function getdata(){
    //fetch data
    const iddata = document.getElementById("id_data").value;
    //added in list
    x.push(iddata);

    createli(iddata);
    dis_null();
}

function createli(iddata){
    // creating li
    let list = document.getElementById("id_ul");
    let li = document.createElement("li");
    li.textContent = iddata;
    list.appendChild(li);
}

function dis_null(){
    //clear box
    document.getElementById("id_data").value = null;
    document.getElementById('id_data').focus();
}

function sort_arr(){
    //to sort the array
    const y=x;
    y.sort();
    y.forEach(createli);
}

function unsort_arr(){
    //to sort the array
    x.forEach(createli);
}

function check_con(){
    //to check the selceted option in select
    const select = document.getElementById("id_select").value;
    console.log(select);
    if(select== 'Original')
    {
        //change the head contain
        document.getElementById("id_h1").textContent = "Original Array";
        clear_data();
        unsort_arr();
    }
    else if(select == 'Sorted')
    {
        //change the head contain
        document.getElementById("id_h1").textContent = "Sorted Array";
        clear_data();
        sort_arr();
    }
}

function clear_data(){
    var ul = document.getElementById("id_ul");
    while((lis = ul.getElementsByTagName("li")).length > 0) {
	ul.removeChild(lis[0]);
}
}
