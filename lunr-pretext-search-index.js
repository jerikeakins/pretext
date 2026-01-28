var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Texas A&M University - Math Learning Center   Find a seat near other students! Work through all of the exercises as best you can and feel free to discuss your thoughts about the questions with some peers around you. Peer facilitators will be walking around the room (wearing name tags and\/or blue T-shirts) to answer any questions you may have during the session. If needed, you can access a virtual copy of this packet at any time this semester via the QR code below.  "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "Getting Warmed Up and in the Right Mindset",
  "body": " Getting Warmed Up and in the Right Mindset   Some words    Question 1  Let and be vectors. Match each formula, identity, or expression to its corresponding purpose\/idea.     Question 2  stuff     Question 3  stuff    "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "Let’s get our hands on!",
  "body": " Let's get our hands on!  foo   The graph made by TikZ   A 5-cycle     bar  "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
},
{
  "id": "section-3",
  "level": "1",
  "url": "section-3.html",
  "type": "Section",
  "number": "3",
  "title": "Now... Grades Go Up!",
  "body": " Now... Grades Go Up!  foo  bar  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
