import React,{ Component}  from 'react';
 import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import {fetchArticle} from '../actions/index';
import {bindActionCreators} from 'redux';
import { Link } from 'react-router';


class PostsIndex extends Component{
  
    componentWillMount(){
        
        this.props.fetchPosts();
    }
  

    renderPosts(){
        var divStyle = {
            color: 'red',
          };
        console.log("This is prop article",this.props.article);
        return this.props.posts.map((post) =>{
            return (
                <div className="feed col-xs-3" 
                    key={post._id}
                    style={{backgroundImage:`url(${post.image})`}}
                    onClick={()=> this.props.fetchArticle(post.articleId)}>
                    <Link to={`/articles/${post.articleId}`}>
                     <strong>
                         <img className="imgFeedOne"  src={post.authorPicture}/>
                            {post.authorName}
                    </strong>
                    <br/>
                    {/* <img className="imgFeed" src=/> */}
                    <br/>
                    <div className="feedTitle">
                        {post.title}
                    </div>
                    </Link>
                </div> 
            );
        });

    }
    render(){   

        if(!this.props.posts){
            return (
                <div><p>Loading</p></div>
            )
        }

        if(this.props.posts){
            return(
                <div>
                   <div className=" " >
                       {this.renderPosts()}
                    </div>
                    
                </div>
            );
        }
    }
}   

function mapStateToProps(state){
    return {
                posts:state.posts.all,
                article:state.article.all
            }
}

//
function mapDispatchToProps(dispatch){
    return bindActionCreators({
                    fetchArticle:fetchArticle,
                    fetchPosts:fetchPosts
                },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);