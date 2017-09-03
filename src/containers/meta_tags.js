import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchArticle} from '../actions/index';
import DocumentMeta from 'react-document-meta';
import { BrowserRouter as Router, Route } from 'react-router-dom'

 class Root extends React.Component {
  componentWillMount(){
    var link =window.location.href.split('/')[4];
    
    console.log(link);
    this.props.fetchArticle(link);
    
    // this.props.fetchArticle(this.props.params.id);
}

  render() {
    if(this.props.article[0]){
    console.log("Meta_ tag in article page ",this.props.article);
    const meta = {
      title: this.props.article[0].title,
      description: 'I am a description, and I can create multiple tags',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charSet: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        },
        itemProp: {
          name: 'The Name or Title Here',
          description: 'This is the page description',
          image: 'http://example.com/image.jpg'
        },
        property: {
          'og:title': this.props.article[0].title,
          'og:type': 'article',
          'og:image':this.props.article[0].headerImage,
          //'og:description':this.props.article[0].content,
          'og:site_name': 'urdailyblogs.com',
          'twitter:site': '@site',
          'twitter:title': 'I am a Twitter title'
        }
      }
    };
    return (
      <DocumentMeta {...meta}>
        { this.props.children }
      </DocumentMeta>
    );
  }
  else{}
    return(
      <div>
     </div>
    )
  }
};
    
    

   
function mapStateToProps(state){
  return {
              
              article:state.article.all
          }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
                  fetchArticle:fetchArticle,

              },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Root);