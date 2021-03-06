import * as React from 'react';
import './home.scss';
import Header from 'src/componets/header/header';
import Footer from 'src/componets/footer/footer';
import { ArticleEntity } from 'src/models/article.entity';
import { HomeArticleItem } from './article_item/article_item';
import { ArticleApi } from 'src/apis/article.api';
import stroe, { RootState } from "src/store";
import { articleActions, articleSelector } from 'src/store/article';
import { connect } from 'react-redux';

import store from 'src/store';
class Home extends React.Component<HomeProps, HomeState> {
    constructor(props:HomeProps) {
        super(props);
        this.state = {
            recentArticles:[]
        };
    }
    public render() {
        return (
            <div className="home">
                <Header />
                <div className="home-content">
                    <div className="home-articles">
                        {
                            this.state.recentArticles.map((article, index) => 
                                <HomeArticleItem 
                                    key = {index}
                                    title = {article.title}
                                    summary = {article.summary}
                                    id = {article.id}
                                />
                            )
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    async componentDidMount() {
        this.showRecentArticle();
        store.dispatch(articleActions.loadList());

        // // TODO
        console.log(stroe.getState());

        stroe.subscribe(()=>{
            console.log("hhhh");
        });
        setTimeout(()=>{
            stroe.dispatch(articleActions.loadList());
        },2000);
    }

    showRecentArticle() {
        // TODO 从store中取数据
        ArticleApi.getList().then(articles => {
            this.setState({
                recentArticles:articles
            });
            console.log(this.state.recentArticles);
        }).catch(error => {
            console.log(error);
        });
    }
} 


interface HomeState {
    recentArticles:  ArticleEntity[];
}

interface HomeProps {
    recentArticles: ArticleEntity[];
    getRecentArticles():any;
}

const mapStateToProps = (state: RootState) => {
    return {
        recentArticles: articleSelector.getArticleList(state.article)
    };
};

const mapDispatchToProps = {
    getRecentArticles: ()=> articleActions.loadList()
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);