let apiUrl = "/data.json"

async function getJson(url) {
    let response = await fetch(url);
    let data = await response.json()
    return data;
}

async function main() {
    // getJson(apiUrl)
    //     .then(data => console.log(data));
    let documents = await getJson(apiUrl)

    let idx = lunr(function () {
      this.field('id')
      this.field('title')
      this.field('author')
      this.field('content', { boost: 10 })
      this.field('summary')
      this.field('url')
      this.field('category')
      this.field('image')
      Object.entries(documents).forEach(function (document) {
        this.add( {
          "id": document[0],
          "title": document[1]['title'],
          'author': document[1]['author'],
          'content': document[1]['content'],
          'summary': document[1]['summary']
        })
      }, this)
    });
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get('query')
    var results = idx.search(param);
    if (results.length) {
    for (result of results) {
      var doc = documents[result.ref];
      $( "#search_results" ).append(
      '<div class="col-md-6 mt-3"><div class="card h-100"><div class="card-body"><a href="'
      + doc.url + '"><h5 class="card-title">'
      + doc.title
      + '</h5></a>'
      + '<img class="align-self-center mr-3 rounded-circle float-end thumb-post" src="'
      + doc.image + '" alt="Thumbnail for story" height="150" width="150">'
      + 'Section: ' + doc.category
      + '<p class="card-text">' + doc.summary + '</p>'
      + '<a href="' + doc.url + '" class="btn btn-dark stretched-link">Read more </a>'
      + '</div></div>');
      }
    } else {
      $( "#search_results" ).append(
        '<div class="container"><div class="col-md-12 mt-3 mb-3 shadow-sm  p-3 bg-white"><p>Your search found no results</p></div></div>'
      );
    }

}

main();




// // watch input
// var $resultsContainer;
//
// $(function(){
//
//   // console.log(idx)
//   // console.log(idx.search(param))
//   var $resultsContainer = $('#search_results');
//     $resultsContainer.empty();
//     if(param.length < 2) return;
//     var results = idx.search(param);
//     // console.log(results)
//     for (result of results) {
//       var doc = documents[result.ref]; // get document via the lunr id
//       $resultsContainer.append('<li><a href="'+doc.url+'">'+doc.title+'</a></li>');
//     }
// })
