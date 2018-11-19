import React from "react";
import { connect } from "react-redux";

import "./index.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerIndex: 0,
      bannerTime: null,
      bannerUrl: [
        "index_banner1.jpg",
        "index_banner2.jpg",
        "index_banner3.jpg",
        "index_banner4.jpg"
      ]
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.bannerFun = this.bannerFun.bind(this);
  }
  bannerFun() {
    this.setState({
      bannerTime: setInterval(() => {
        this.setState({
          bannerIndex:
            this.state.bannerIndex + 1 > this.state.bannerUrl.length - 1
              ? 0
              : this.state.bannerIndex + 1
        });
      }, 3000)
    });
  }
  handleMouseEnter(index) {
    clearInterval(this.state.bannerTime);
    this.setState({ bannerIndex: index });
  }
  handleMouseLeave() {
    this.bannerFun();
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }
  componentDidMount() {
    this.bannerFun();
  }
  componentWillUnmount() {
    clearInterval(this.state.bannerTime);
  }
  render() {
    return (
      <div className="djm-index">
        <div className="djm-index-main">
          {/* <div className="djm-index-banner">
            <ul className="djm-index-banner-img clearfloat">
              {this.state.bannerUrl.map((url, index) => (
                <li
                  key={index}
                  className={
                    this.state.bannerIndex === index ? "djm-ibi-display" : null
                  }
                >
                  <img src={require(`./images/${url}`)} alt="banner" />
                </li>
              ))}
            </ul>
            <ul className="djm-index-banner-indicator clearfloat">
              {this.state.bannerUrl.map((url, index) => (
                <li
                  onMouseEnter={enve => this.handleMouseEnter(index, enve)}
                  onMouseLeave={enve => this.handleMouseLeave(index, enve)}
                  key={index}
                  className={
                    this.state.bannerIndex === index ? "djm-ibi-choose" : null
                  }
                />
              ))}
            </ul>
          </div> */}
          <div className="djm-index-content">
            <ul className="djm-index-uesr-article clearfloat">
              <li className="djm-iua-left">
                <p className="djm-iua-line">
                  <b className="line-one" />
                  <b className="line-two" />
                  <i className="round-big" />
                  <span className="article-author">作者：XXX</span>
                  <span className="article-data">日期：2018-20-11</span>
                </p>
                <div className="djm-iua-content">
                  <img src={require("./images/index_banner1.jpg")} alt="图片" />
                  <p>hsahfhashfasfa</p>
                </div>
              </li>
              <li className="djm-iua-right no-margin-right">
                <p className="djm-iua-line">
                  <b className="line-one" />
                  <b className="line-two" />
                  <i className="round-big" />
                  <span className="article-author">作者：XXX</span>
                  <span className="article-data">日期：2018-20-11</span>
                </p>
                <div className="djm-iua-content">
                  <img src={require("./images/index_banner1.jpg")} alt="图片" />
                  <p>hsahfhashfasfa</p>
                </div>
              </li>
              <li className="djm-iua-left">
                <p className="djm-iua-line">
                  <b className="line-one" />
                  <b className="line-two" />
                  <i className="round-big" />
                  <span className="article-author">作者：XXX</span>
                  <span className="article-data">日期：2018-20-11</span>
                </p>
                <div className="djm-iua-content">
                  <img src={require("./images/index_banner1.jpg")} alt="图片" />
                  <p>hsahfhashfasfa</p>
                </div>
              </li>
              <li className="djm-iua-right no-margin-right">
                <p className="djm-iua-line">
                  <b className="line-one" />
                  <b className="line-two" />
                  <i className="round-big" />
                  <span className="article-author">作者：XXX</span>
                  <span className="article-data">日期：2018-20-11</span>
                </p>
                <div className="djm-iua-content">
                  <img src={require("./images/index_banner1.jpg")} alt="图片" />
                  <p>hsahfhashfasfa</p>
                </div>
              </li>
              <span className="separated-line" />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return state;
}
export default connect(mapStateToProps)(Index);
