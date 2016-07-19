var React=require('react');
var ReactDom=require('react-dom');
var data=[{Title:'Up',Year:'1994',Img:'http://extras.mnginteractive.com/live/media/site33/2014/0820/20140820_032255_Up%20logo.jpg'},{Title:'Titanic',Year:'1999',Img:"http://i.dailymail.co.uk/i/pix/2014/01/26/article-2546113-1AF7271700000578-987_634x407.jpg"},{Title:'Avatar',Year:'1999',Img:"http://cine-matt.com/wp-content/uploads/2015/07/avatar-2009.jpg"}];
//var data=[{Title:"Amitha"}];

var MovieForm = React.createClass({
  render: function() {
return (
      <div id="movieform">
      <div className="row">
      <div className="col-md-6 " >
      <h1>Movie Details</h1>
      </div>
      <div className="col-md-6 " pull-right >
      <form pull-right >

       <input type="text" id="searchn" placeholder="Search Movie " />
       <button type="submit" className="btn btn-primary"><span className="glyphicon glyphicon-search"></span></button>
</form>
</div>
</div>
      </div>
    );
  }
});
var Movielist = React.createClass({
  render: function() {
  var MovieData =  this.props.Movies.map(function(movies) {
      return(<Movie movie1={movies} key={movies.Title}></Movie>);
    }.bind(this));
    return (
      <div>

        {MovieData}
      </div>
    );
  }
});



var Movie = React.createClass({
  render: function() {
    return (
      <div className="Movie" id="moviedata">
<div className="row">
<div className="col-md-8 " >
    <img alt="Image " className="img-rounded"src={this.props.movie1.Img}/>
    </div>
    <div className="col-md-4" >
    <h3 >Title:{this.props.movie1.Title}</h3>
    <h4 >
Year:{this.props.movie1.Year}</h4>
</div>
</div>
      </div>
    );
  }
});
var Moviebox = React.createClass({
  render: function() {
    return (
      <div className="Moviebox">
      <MovieForm />
      <Movielist Movies={this.props.name1} />
      </div>
    );
  }
});


ReactDom.render(

  <Moviebox name1={data} />,
  document.getElementById('app')
);
