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
      this.field('title', { boost: 10 })
      this.field('author')
      this.field('content')
      this.field('summary')
      this.field('url')
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

    for (result of results) {
      var doc = documents[result.ref];
      $( "#search_results" ).append('<li><a href="'+doc.url+'">'+doc.title+'</a><br/>'+doc.summary+'</li>');
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
