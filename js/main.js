// this is for the function and the event listener
function bookSearch(){
	var search=document.getElementById('search').value
	document.getElementById('list-group').innerHTML=""
	// this is for the ajax
	$.ajax({
		url:"https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" +search,
		dataType:"json",
		success:function(data){
			var results=document.getElementById('list-group')
			for(i=0; i<data.items.length;i++){
				// this is fo the title of the book
				results.innerHTML+="<li class="+"list-group-item"+">"
				results.innerHTML+="<h1>"+ data.items[i].volumeInfo.title +"</h1>"
				// this is for the author of the book
				results.innerHTML+="<h3>"+data.items[i].volumeInfo.authors+"</h3>"
				// this is for the id no of the books.
				results.innerHTML+="<p>"+"Id No: "+data.items[i].id +"</p>"
				// this is for the image of the books
				results.innerHTML+="<img src='"+data.items[i].volumeInfo.imageLinks.thumbnail+"'>"
				results.innerHTML+="</li>"
			}
		},
		type:"GET"
	});
}
document.getElementById('button').addEventListener('click',bookSearch,false)