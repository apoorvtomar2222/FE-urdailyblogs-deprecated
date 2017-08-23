import React,{ Component}  from 'react';
import {connect} from 'react-redux';

class PostArticle extends Component{
    
    
    render(){
        
        if(this.props.article[0 ]){
            var content = this.props.article[0];
            console.log("Content on article page is ",content);
            return(
                <div className="container">
                    <div>
                        {content.title}

                    </div>
                    <div>
                        <img src={content.headerImage}/>
                        
                    </div>
                    <div>
                        {content.content}
                    </div>
                </div>
            )
        }
        else{
            return(
            <div>Loading.............</div>
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