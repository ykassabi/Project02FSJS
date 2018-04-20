//Hello, all the code is in Vanilla JS, I think in this project the principale of Unobtrusive is respected because in case the JS is not supported the user still can see the full list of students.
const students = document.getElementsByClassName("student-item");//like an array 'li' of all the students
const pagination = document.querySelector(".pagination");//  // determine how many pages for this student list
let numberOfPages = Math.ceil(students.length/10);


//calling the onload function to grab the first 10 student.
window.onload = function(){
  showPage(1);// argument 1 is for the first page
  document.querySelectorAll(".pagination  a")[0].classList.add("active")
};

function showPage(currentPage){//fuction to filter the student, show/hide

  //variable to manage the intervals of 10 students
  let x =((currentPage - 1) * 10);//this the start of the interval of students.
  let y = students.length; //total of the pages
  let z = x + 10;//this will be the end of the interval, index of the last student on the page the 10th

  // looping through all students
  for(let i = 0 ; i < y; i++){
    if( i < z && i >= x){//i should not be higher that the z = x + 10 and should start at x
      students[i].style.display = "block";//this will add "display" proprety to the element "li" of every student qualifies.
      // console.log(i) //uncomment to see the count of students on the console
    }
    else{
    students[i].style.display = "none"; // what ever fail to be in the 10 students interval
    }
  };
};


  function appendPageLinks() {//function for pagination and call showpage to display the appropriete student.
    // create a string(a ul) for pagination to add to the bottom of the page undererthe class pagination
  let pagesIndex = "<ul>";
  for (let i = 1 ; i <= numberOfPages; i++ ){
    pagesIndex += "<li> <a href='#'>"+ i +"</a> </li>"
  }
  pagesIndex += "</ul >"
  pagination.innerHTML = pagesIndex; // display the html on page.
  //now the html tree in the last div of the body,
  //should look like: .pagination>ul>li>a

  // let li = document.querySelectorAll(".pagination  li");//for the
  let anker = document.querySelectorAll(".pagination  a");//for "active" class
  //I did not success to reach the anker through li, trasversal...

  pagination.addEventListener("click",(e) => { //putting an click event on the pagination class.
    let i = e.target.textContent; // getting just the number of the page. e for even where it occurs and it is an anker element.
    if( e.target.tagName == "A" ){ //to eliminat any click outside the  Ancker,
      for(let x = 0 ; x < anker.length; x++){
        anker[x].classList.remove("active") // will remouve any active class before adding it on the appropriete one next.
      }
      showPage(i);//calling the show page with the right page number we just click on.
      e.target.classList.add("active");// will highlight the page number
    };
  },false)
};

appendPageLinks();

/////////////////////////////////////////////////////////////////////
// Sorry did not had time to fo the extras, working on other project on the side.
// I hope I did not crowded the code with too much comments, being verbose is mainly for easier correcting .
/////////////////////////////////////////////////////////////////////
