
//create an array of all students
let studentList = document.querySelectorAll('ul.student-list li');



function showPage (pageNumber){
  //set page number variable to a mulitple of 10 for last student to be showed
  pageNumber = (pageNumber * 10)
  //itterate over students list
  for (let i = 0; i < studentList.length; i ++){
    //pararamters for range of students to be showed
    //ie: if page 2 is passed into function show students index 20 upto 29
    if (i >= (pageNumber-10) && i < (pageNumber)){
      studentList[i].style.display = "";
    } else {
      studentList[i].style.display = "none";
    }
}
};

function appendPageLinks (){
    //get number of students too see how many links to be created
    let pageLinksNumber = Math.ceil(studentList.length / 10)
    for (let i = 1; i <= pageLinksNumber; i ++){
    //select the pagination class unorder list
    let paginationUl = document.querySelector('.pagination ul');
    //create a new li element
    let li = document.createElement('li');
    //create a new anchor
    let link = document.createElement('a');
    link.setAttribute('href', "#")
    link.textContent = i;
    //attach link"a" to the newly create list item
    li.appendChild(link)
    //attach list item to the paginaition unorder list
    paginationUl.appendChild(li);
    }
    //select all newly create links
    let links = document.querySelectorAll('a');
    //itterate over all the links and add event listeners to each
    for (let i=0; i <links.length; i ++)
    links[i].addEventListener('click', (event) => {
      //create a integer out of text held by the link and pass it as an argument to the showPage function
      let linkNum = parseInt(event.target.textContent);
      showPage(linkNum);

    });
}
//hide all students when page first loads
function hideAll(){
  for (let i = 0; i < studentList.length; i ++){
  studentList[i].style.display = 'none';
}
}
//show only first 10 students when page first loads
function firstTen (){
  for (let i = 0; i < 10; i ++){
  studentList[i].style.display = '';
  }
}


hideAll();
firstTen ();
appendPageLinks ();
