import React from "react";
import { connect } from "react-redux";

import UserArticleList from "../../container/userArticle";

import "./userArticle.css";

class UserArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: [
        {
          name: "XXX",
          data: "2018-11-11",
          imgUrl: require("./images/index_banner1.jpg"),
          title: "hsahfhashfasfa",
          comments: 2356,
          givelike: {
            number: 6589,
            isChoose: false
          },
          collection: {
            number: 564,
            isChoose: false
          }
        },
        {
          name: "OOO",
          data: "2018-10-11",
          imgUrl: require("./images/index_banner2.jpg"),
          title: "ASFSAFASsb",
          comments: 2136,
          givelike: {
            number: 1289,
            isChoose: false
          },
          collection: {
            number: 230,
            isChoose: true
          }
        },
        {
          name: "AAA",
          data: "2014-10-11",
          imgUrl: require("./images/index_banner3.jpg"),
          title: "阿贾克斯",
          comments: 6587,
          givelike: {
            number: 554,
            isChoose: true
          },
          collection: {
            number: 0,
            isChoose: false
          }
        },
        {
          name: "CCCC",
          data: "2016-02-11",
          imgUrl: require("./images/index_banner4.jpg"),
          title: "safsaffasf",
          comments: 6987123,
          givelike: {
            number: 2365124,
            isChoose: false
          },
          collection: {
            number: 1475,
            isChoose: true
          }
        }
      ],
      displayList: "new"
    };
    this.handleClickAction = this.handleClickAction.bind(this);
    this.changeItemFun = this.changeItemFun.bind(this);
    this.handleClickNav = this.handleClickNav.bind(this);
  }
  changeItemFun(changeItem, key, value) {
    this.setState(
      Object.assign(changeItem, changeItem, {
        [key]: value
      })
    );
  }
  handleClickAction(dataName, stateIndex) {
    const changeItem = this.state.userInfo[stateIndex];
    if (changeItem[dataName].isChoose) {
      this.changeItemFun(
        changeItem[dataName],
        "number",
        changeItem[dataName].number - 1
      );
      this.changeItemFun(changeItem[dataName], "isChoose", false);
    } else {
      this.changeItemFun(
        changeItem[dataName],
        "number",
        changeItem[dataName].number + 1
      );
      this.changeItemFun(changeItem[dataName], "isChoose", true);
    }
  }
  handleClickNav(displayName) {
    this.setState({ displayList: displayName });
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  render() {
    const language = this.props.languageStore.language.userArticle;
    return (
      <div className="djm-index-content">
        <div className="djm-index-content-title">
          <span
            onClick={event => this.handleClickNav("new", event)}
            className={this.state.displayList === "new" ? "choose-class" : null}
          >
            最新发布
          </span>
          <span
            className={this.state.displayList === "hot" ? "choose-class" : null}
            onClick={event => this.handleClickNav("hot", event)}
          >
            最热攻略
          </span>
          <span
            className={this.state.displayList === "my" ? "choose-class" : null}
            onClick={event => this.handleClickNav("my", event)}
          >
            我的收藏
          </span>
        </div>
        <ul className="djm-index-uesr-article clearfloat">
          <UserArticleList
            {...this.props}
            userInfo={this.state.userInfo}
            handleClickAction={this.handleClickAction}
            language={language}
            displayList={this.state.displayList}
          />
          <span className="separated-line" />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

export default connect(mapStateToProps)(UserArticle);
