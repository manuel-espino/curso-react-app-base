import React, { PropTypes } from 'react';

// Importamos los componentes
import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm';
import RepositoryList from '../../components/RepositoryList'
/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {
  
  static PropTypes = {
    loading: PropTypes.bool.isRequired,
    results: PropTypes.arrayOf(PropTypes.object).isRequired,
    search: PropTypes.string.isRequired,
    queried: PropTypes.bool.isRequired
  }
  
  constructor(props){
    super(props);

    // Binds
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      loading: false, //Flag
      results: [],
      search: '',
      queried: false //Para saber si se ha producido una búsqueda y cambiar el mensaje
    }
  }
  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  stubData() {
    let repo = {
      full_name: 'MyRepository',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }

  onSubmit(value){
    this.setState({ loading: true });


setTimeout( () => {
  this.setState({
    search: value,
    loading: false,
    queried: true,
    results: this.stubData()
  });

}, 2000);
  
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <main className="container">
      <SearchForm onSubmit={this.onSubmit} search={this.state.search} />
      <RepositoryList data={this.state.results} loading={this.state.loading} 
      queried={this.state.queried} search={this.state.search}
         />
    </main>
  }
}

// Exportamos
export default SearchContainer;
