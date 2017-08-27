import React,{ Component}  from 'react';
import {connect} from 'react-redux';

class PostArticle extends Component{
    
    
    render(){
        
        if(this.props.article[0 ]){
            var content = this.props.article[0];
            console.log("Content on article page is ",content);
            return(
                <div className="container">
                    <div className="articleTitle">
                        {content.title}
                    </div>
                    <div className="articleImage">
                        <img src={content.headerImage}/>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html:content.content  }}>
                        
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
              </div>
            )
        }
        
    }

};

function mapStateToProps(state){
    return {
                
                article:state.article.all
            }
}

export default connect(mapStateToProps)(PostArticle);