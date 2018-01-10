var movies = [{
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'http://harrypotterfanzone.com/wp-content/2015/07/order-of-the-phoenix-theatrical-poster-2.jpg'
}, {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    img: 'https://vignette.wikia.nocookie.net/kids-worlds-adventures/images/c/cf/Pooh%27s_Adventures_of_The_Lion_King_Poster.jpg/revision/latest?cb=20141123201745'
}, {
    id: 3,
    title: 'Niewinne',
    desc: 'Film o niewinnych',
    img: 'https://1.bp.blogspot.com/-XqGq0-JH3eE/WkS88JdVdII/AAAAAAAAGTo/NLiyVZ9gndsgtZIFoqFqMuUSu1o5FHUJwCLcBGAs/s1600/niewinne.jpg'
}, {
    id: 4,
    title: 'Piękna i Bestia',
    desc: 'Musical',
    img: 'https://2.bp.blogspot.com/-I5uFFPWA0HQ/WkTJQYdGHSI/AAAAAAAAGUo/-BMXFXY8iboNymnjJFAl9X2YCNAMSwTIQCLcBGAs/s1600/piekna-i-bestia-b-iext50135275.jpg'
}];


var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {
                    key: this.props.movie.id
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImg, {
                    img: this.props.movie.img
                })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('h2', {}, this.props.title)
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('p', {}, this.props.desc)
    }
});

var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired,
    },
    render: function() {
        return React.createElement('img', {
            src: this.props.img
        })
    }
});

var MoviesList = React.createClass({
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, movieElement)
            )
        )
    }
});

var movieElement = movies.map(function(movie) {
    return React.createElement(Movie, {
        key: movie.id,
        movie: movie
    })
});
var element = React.createElement(MoviesList);
ReactDOM.render(element, document.getElementById('app'));